import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './HotelBookingForm.module.scss';
import { hotelsCardsInfo } from '../../constants';
import { formatDate } from '../lib';

interface HotelBookingFormProps {
  onDestinationSelect: (destinationId: string) => void;
}

const HotelBookingForm: React.FC<HotelBookingFormProps> = ({ onDestinationSelect }) => {
  const [formData, setFormData] = useState({
    selectedCard: '',
    name: '',
    phone: '',
    date: '',
    dateOut: '',
    nights: '',
    peopleCount: '',
    children: '',
    budget: '',
    preferences: '',
    destination: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      destination: value,
      selectedCard: value, // Сохраняем destination как selectedCard
    });
    onDestinationSelect(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

		formData.date = formatDate(formData.date)
		formData.dateOut = formatDate(formData.dateOut)
    // Логика отправки данных через EmailJS
    emailjs
      .send(
        'service_8php494', // Замените на свой service ID
        'template_ectf2pc', // Замените на свой template ID
        {
          ...formData, // Передаем все данные формы
          selectedCard: `отеля по направлению - ${hotelsCardsInfo.find((el) => el.id.toString() == formData.destination)?.name || ''}`, // Получаем название выбранного отеля по ID
        },
        'fZ2o5KI6oXO0xXrfz' // Замените на свой public API key
      )
      .then((result) => {
        console.log('Email sent successfully', result.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Произошла ошибка при отправке формы. Попробуйте позже.');
      });
  };

  return (
    <>
      {!submitted ? (
        <form className={styles.hotelBookingForm} onSubmit={handleSubmit} netlify-honeypot="bot-field">
          <h2>Форма для бронирования</h2>
					<p className="hidden">
						<label>
							Don’t fill this out if you’re human: <input name="bot-field" />
						</label>
					</p>
          <div className={styles.formGroup}>
            <label htmlFor="destination">Выбор по городам</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleDestinationChange}
              required
            >
              {hotelsCardsInfo.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Даты заезда</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="nights">Количество ночей</label>
            <input
              type="number"
              id="nights"
              name="nights"
              value={formData.nights}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="peopleCount">Количество людей</label>
            <input
              type="number"
              id="peopleCount"
              name="peopleCount"
              value={formData.peopleCount}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="children">Если дети - возраст</label>
            <input
              type="text"
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="budget">Приблизительный бюджет</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroupText}>
            <label htmlFor="preferences">
              Ваши пожелания к отелю (питание, бассейн и т.д.)
            </label>
            <textarea
              id="preferences"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Забронировать</button>
        </form>
      ) : (
        <div className={styles.confirmationMessage}>
          Спасибо за бронирование! Наш менеджер свяжется с вами в течение суток.
        </div>
      )}
    </>
  );
};

export default HotelBookingForm;
