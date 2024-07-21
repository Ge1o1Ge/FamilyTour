import { FormEvent, useState } from 'react';
import { vipToursCardsInfo } from '../../constants';
import { CardInterface } from '../../../types';
import styles from './BookingForm.module.scss';

interface BookingFormProps {
  onCarSelect: (carId: string) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onCarSelect }) => {
  const [selectedCar, setSelectedCar] = useState<string>(`${vipToursCardsInfo[0].id}`);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [peopleCount, setPeopleCount] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const carId = event.target.value;
    setSelectedCar(carId);
    onCarSelect(carId);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Логика обработки бронирования
    console.log({
      selectedCar,
      name,
      phone,
      date,
      peopleCount
    });
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <label htmlFor="car">Выберите машину:</label>
          <select id="car" value={selectedCar} onChange={handleCarChange}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="phone">Телефон:</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="date">Дата:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="peopleCount">Количество человек:</label>
          <input
            id="peopleCount"
            type="number"
            value={peopleCount}
            min="1"
            onChange={(e) => setPeopleCount(Number(e.target.value))}
            required
          />

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
