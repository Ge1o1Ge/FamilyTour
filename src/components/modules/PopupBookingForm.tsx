import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com'; // Импортируем EmailJS
import { CardInterface } from '../../../types';
import styles from './PopupBookingForm.module.scss';
import { removeOverflowHiddenFromBody } from '../../utils/common';
import { closeQickViewModal } from '../../context/modals';
import { arrows } from '../../assets';

interface PopupBookingFormProps {
  card: CardInterface;
}

const PopupBookingForm: React.FC<PopupBookingFormProps> = ({ card }) => {
  const [formData, setFormData] = useState({
		selectedCard: card.name,
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
  const [error, setError] = useState<string | null>(null); // Состояние для отображения ошибок

  const handleCloseModal = () => {
    removeOverflowHiddenFromBody();
    closeQickViewModal();
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'peopleCount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Сбрасываем ошибки перед отправкой

    // Отправка данных через EmailJS
    emailjs
      .send(
        'service_8php494', // ID вашего сервиса в EmailJS
        'template_ectf2pc', // ID вашего шаблона в EmailJS
        {
          selectedCard: formData.selectedCard,
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          peopleCount: formData.peopleCount,
          preferences: formData.preferences,
        },
        'fZ2o5KI6oXO0xXrfz' // Ваш публичный ключ (User ID)
      )
      .then(
        () => {
          setSubmitted(true); // Показываем сообщение об успешной отправке
        },
        (error) => {
          console.error('Ошибка отправки формы:', error);
          setError(
            'Произошла ошибка при отправке заявки. Попробуйте еще раз позже.'
          );
        }
      );
  };

  return (
    <div className={styles.popupBookingForm}>
      <button className="popup__close__btn" onClick={handleCloseModal}>
        <img src={arrows.close} alt="закрыть" />
      </button>
      {!submitted ? (
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Телефон:</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="date">Дата мероприятия:</label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="peopleCount">Количество человек:</label>
          <input
            id="peopleCount"
            type="number"
            value={formData.peopleCount}
            min="1"
            onChange={handleChange}
            required
          />
          <div className={styles.formGroupText}>
            <label htmlFor="preferences">Ваши пожелания по отдыху</label>
            <textarea
              id="preferences"
              value={formData.preferences}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formActions}>
            <button type="submit">Забронировать</button>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}{' '}
          {/* Отображение ошибки */}
        </form>
      ) : (
        <div className={styles.confirmationMessage}>
          Спасибо за бронирование! Наш менеджер свяжется с вами в течение суток.
        </div>
      )}
    </div>
  );
};

export default PopupBookingForm;
