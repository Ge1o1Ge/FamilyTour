import { FormEvent, useState } from 'react';
import { CardInterface } from '../../../types';
import styles from './PopupBookingForm.module.scss';
import { removeOverflowHiddenFromBody } from '../../utils/common';
import { closeQickViewModal } from '../../context/modals';
import { arrows } from '../../assets';

interface PopupBookingFormProps {
  card: CardInterface;
  // onCarSelect: (carId: string) => void;
  // onClose: () => void;
}

const PopupBookingForm: React.FC<PopupBookingFormProps> = ({ card }) => {
  const [formData, setFormData] = useState({
    selectedCar: card.id,
    name: '',
    phone: '',
    date: '',
    peopleCount: 1,
    preferences: '',
  });

  const handleCloseModal = () => {
    removeOverflowHiddenFromBody();
    closeQickViewModal();
  };

  const [submitted, setSubmitted] = useState<boolean>(false);

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

    // if (id === 'selectedCar') {
    //   onCarSelect(value);
    // }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Логика обработки бронирования
    console.log(formData);
    setSubmitted(true);
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
            <label htmlFor="preferences">
              Ваши пожелания по отдыху
            </label>
            <textarea
              id="preferences"
              value={formData.preferences}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formActions}>
            <button type="submit">Забронировать</button>
          </div>
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
