// components/modules/HotelBookingForm.tsx
import React, { useState } from 'react';
import styles from './HotelBookingForm.module.scss';
import { hotelsCardsInfo } from '../../constants';

interface HotelBookingFormProps {
  onDestinationSelect: (destinationId: string) => void;
}

const HotelBookingForm: React.FC<HotelBookingFormProps> = ({ onDestinationSelect }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkInDate: '',
    nights: '',
    guests: '',
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
    });
    onDestinationSelect(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика обработки формы
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form className={styles.hotelBookingForm} onSubmit={handleSubmit}>
          <h2>Форма для бронирования</h2>

          <div className={styles.formGroup}>
            <label htmlFor="destination">Выбор по городам</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleDestinationChange}
              required
            >
              <option value="">Выберите город</option>
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
            <label htmlFor="checkInDate">Даты заезда</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={formData.checkInDate}
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
            <label htmlFor="guests">Количество людей</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
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
