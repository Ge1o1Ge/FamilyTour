import { FormEvent, useState } from 'react';
import { vipToursCardsInfo } from '../../constants';
import { CardInterface } from '../../../types';
import styles from './BookingForm.module.scss';

interface BookingFormProps {
  onCarSelect: (carId: string) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onCarSelect }) => {
  const [formData, setFormData] = useState({
    selectedCar: `${vipToursCardsInfo[0].id}`,
    name: '',
    phone: '',
    date: '',
    peopleCount: 1,
    preferences: '',
  });
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

    if (id === 'selectedCar') {
      onCarSelect(value);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Логика обработки бронирования
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form
          className={styles.bookingForm}
          onSubmit={handleSubmit}
          netlify-honeypot="bot-field"
        >
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <label htmlFor="selectedCar">Выберите машину:</label>
          <select
            id="selectedCar"
            value={formData.selectedCar}
            onChange={handleChange}
          >
            {vipToursCardsInfo.map((car: CardInterface) => (
              <option key={car.id} value={car.id}>
                {car.name}
              </option>
            ))}
          </select>

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

          <label htmlFor="date">Дата:</label>
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
              Ваши пожелания к отелю (питание, бассейн и т.д.)
            </label>
            <textarea
              id="preferences"
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

export default BookingForm;
