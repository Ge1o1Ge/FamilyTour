import { FormEvent, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { SectionWrapper } from '../hoc';
import AddressInput from './modules/AdressInput';
import VerticalCarousel from './modules/VerticalCarousel';
import TransfersSlider from './modules/TransfersCarCarousel';
import { useMediaQuery } from '../assets/hooks/useMediaQuery';
import {
  useTransfersInfo,
  useTransfersSelectedItem,
} from '../assets/hooks/useTransfersInfo';

const Transfers = () => {
  const [placeholderDate, setPlaceholderDate] = useState('');
  const [isBackDate, setIsBackDate] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Состояние для попапа
  const { tranfersInfo } = useTransfersInfo();
  const { transfersSelectedItem } = useTransfersSelectedItem();

  const isMedia470 = useMediaQuery(470);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    setPlaceholderDate(formattedDate);
  }, []);

  const handleIsBackDate = () => {
    setIsBackDate(!isBackDate);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = {
      from: (form.elements.namedItem('from') as HTMLInputElement).value,
      to: (form.elements.namedItem('to') as HTMLInputElement).value,
      date1: (form.elements.namedItem('date1') as HTMLInputElement).value,
      time1: (form.elements.namedItem('time1') as HTMLInputElement).value,
      date2: isBackDate
        ? (form.elements.namedItem('date2') as HTMLInputElement).value
        : 'нет',
      time2: isBackDate
        ? (form.elements.namedItem('time2') as HTMLInputElement).value
        : 'нет',
      passangers: (form.elements.namedItem('passangers') as HTMLInputElement)
        .value,
      childSeat: (form.elements.namedItem('childSeat') as HTMLInputElement)
        .checked
        ? 'да'
        : 'нет',
      baggage: (form.elements.namedItem('baggage') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      tarif:
        tranfersInfo.find((item) => item.id === transfersSelectedItem)?.name ||
        null,
    };

    emailjs
      .send(
        'service_8php494',
        'template_83xnnhu',
        formData,
        'fZ2o5KI6oXO0xXrfz'
      )
      .then(
        (_result) => {
          setShowPopup(true); // Показать попап
          setTimeout(() => setShowPopup(false), 3000); // Скрыть попап через 3 секунды
        },
        (_error) => {
          alert('Произошла ошибка при отправке заявки.');
        }
      );
  };

  return (
    <div className="transfers">
      {showPopup && ( // Попап успешной отправки
        <div className="popup__succes">
          <p>Заявка отправлена успешно!</p>
        </div>
      )}
      <div className="transfers__description section">
        <h2 className="transfers__title">Трансфер</h2>
      </div>
      <form
        className="transfers__inner transfers__form section"
        onSubmit={handleSubmit}
        netlify-honeypot="bot-field"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <div className="transfers__form__left">
          <p className="transfers__text">
            Опытные водители на комфортабельных автомобилях готовы доставить вас
            в любую точку Черноморского побережья, организовать встречу из
            аэропорта или вокзала, а также доставить вас обратно по окончании
            отдыха.
          </p>
          <p className="transfers__text transfers__tags">
            #Трансфер #Черное_Море{' '}
          </p>
          <div className="transfers__form__fields">
            <p className="transfers__form__text">Даты трансфера</p>
            <div className="transfers__form__fields__dates">
              <div className="transfers__form__fields__dates__first">
                <label htmlFor="date1">Туда:</label>
                <input
                  id="date1"
                  name="date1"
                  type="date"
                  required
                  defaultValue={placeholderDate}
                  min={placeholderDate}
                />
                <label htmlFor="time1" style={{ display: 'none' }}>
                  Время поодачи туда:
                </label>
                <input
                  id="time1"
                  name="time1"
                  required
                  className="transfers__form__input__time"
                  type="time"
                  defaultValue="22:00"
                />
              </div>
              <div className="transfers__form__fields__dates__first">
                <label htmlFor="backDate">Обратно:</label>
                <input
                  id="backDate"
                  name="backDate"
                  type="checkbox"
                  checked={isBackDate}
                  onChange={handleIsBackDate}
                />
                {isBackDate && (
                  <>
                    <input
                      id="date2"
                      name="date2"
                      type="date"
                      defaultValue={placeholderDate}
                      min={placeholderDate}
                    />
                    <label htmlFor="time2" style={{ display: 'none' }}>
                      Время поодачи обратно:
                    </label>
                    <input
                      id="transfers__form__input__time2"
                      name="time2"
                      type="time"
                      className="transfers__form__input__time"
                      defaultValue="22:00"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="transfers__form__fields__places">
              <div>
                <label htmlFor="from">Откуда забрать:</label>
                <AddressInput id="from" name="from" />
              </div>
              <div>
                <label htmlFor="to">Куда доставить:</label>
                <AddressInput id="to" name="to" />
              </div>
            </div>
            <div className="transfers__form__fields__details">
              <div className="transfers__form__fields__details__box">
                <div>
                  <label htmlFor="passangers">Кол-во пассажиров:</label>
                  <input
                    id="passangers"
                    name="passangers"
                    type="number"
                    placeholder="1"
                    required
                    min="1"
                  />
                </div>
                <div>
                  <label htmlFor="childSeat">Детское кресло:</label>
                  <input type="checkbox" id="childSeat" name="childSeat" />
                </div>
              </div>
              <label htmlFor="baggage">Чемоданы:</label>
              <input
                id="baggage"
                name="baggage"
                type="number"
                placeholder="0"
                min="0"
              />
            </div>
            <div className="transfers__form__fields__contacts">
              <div>
                <label htmlFor="phone">Телефон:</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  placeholder="+7-911-123-45-67"
                  // pattern="\+\d{1,3}-\d{3}-\d{3}-\d{2}-\d{2}"
                />
              </div>
              <div>
                <label htmlFor="name">Имя:</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Петр Иванович"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="transfers__form__right">
          <h2 className="transfers__form__title">Выбор тарифа</h2>
          <VerticalCarousel />
          <button type="submit" className="transfers__form__submit">
            Заказать трансфер
          </button>
        </div>
      </form>
      {!isMedia470 && (
        <div className="transfers__form__slider">
          <TransfersSlider />
        </div>
      )}
    </div>
  );
};

const transfersWrapped = SectionWrapper(Transfers, 'transfers', false);
export default transfersWrapped;
