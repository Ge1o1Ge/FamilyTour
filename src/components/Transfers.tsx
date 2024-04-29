import { useEffect, useState } from 'react';
import { SectionWrapper } from '../hoc';
import AddressInput from './modules/AdressInput';
import VerticalCarousel from './modules/VerticalCarousel';

const Transfers = () => {
  const [placeholderDate, setPlaceholderDate] = useState('');
  const [isBackDate, setIsBackDate] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    setPlaceholderDate(formattedDate);
  }, []);

  const handleIsBackDate = () => {
    setIsBackDate(!isBackDate);
  };

  return (
    <div className="transfers">
      <div className="transfers__description">
        <h2 className="transfers__title">Трансфер</h2>
      </div>
      <form className="transfers__inner transfers__form">
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
              <label htmlFor="transfers__form__input__date1">Туда:</label>
              <input
                id="transfers__form__input__date1"
                type="date"
                defaultValue={placeholderDate}
                min={placeholderDate}
              />
              <input
                id="transfers__form__input__time1"
                className="transfers__form__input__time"
                type="time"
                defaultValue="22:00"
              />
              <label htmlFor="transfers__form__input__date2">Обратно:</label>
              <input
                type="checkbox"
                checked={isBackDate}
                onChange={handleIsBackDate}
              />
              {isBackDate && (
                <>
                  <input
                    id="transfers__form__input__date2"
                    type="date"
                    defaultValue={placeholderDate}
                    min={placeholderDate}
                  />
                  <input
                    id="transfers__form__input__time2"
                    type="time"
                    className="transfers__form__input__time"
                    defaultValue="22:00"
                  />
                </>
              )}
            </div>
            <div className="transfers__form__fields__places">
              <div>
                <label htmlFor="transfers__form__input__from">
                  Откуда забрать:
                </label>
                <AddressInput id="transfers__form__input__from" />
              </div>
              <div>
                <label htmlFor="transfers__form__input__to">
                  Куда доставить:
                </label>
                <AddressInput id="transfers__form__input__to" />
              </div>
            </div>
            <div className="transfers__form__fields__details">
              <div className="transfers__form__fields__details__box">
                <label htmlFor="transfers__form__input__passangers">
                  Кол-во пассажиров:
                </label>
                <input
                  id="transfers__form__input__passangers"
                  type="number"
                  placeholder="1"
                  min="1"
                />
                <label htmlFor="transfers__form__input__child">
                  Детское кресло:
                </label>
                <input type="checkbox" id="transfers__form__input__child" />
              </div>
              <label htmlFor="transfers__form__input__baggadge">
                Чемоданы:
              </label>
              <input
                id="transfers__form__input__baggadge"
                type="number"
                placeholder="0"
                min="0"
              />
            </div>
            <div className="transfers__form__fields__contacts">
              <div>
                <label htmlFor="transfers__form__input__phone">Телефон:</label>
                <input
                  id="transfers__form__input__phone"
                  type="text"
                  placeholder="+7-911-123-45-67"
                  pattern="\+\d{1,3}-\d{3}-\d{3}-\d{2}-\d{2}"
                />
              </div>
              <div>
                <label htmlFor="transfers__form__input__name">Имя:</label>
                <input
                  id="transfers__form__input__name"
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
        </div>
      </form>
      <div className="transfers__form__cars">машинки слайдер</div>
      <div className="transfers__box"></div>
    </div>
  );
};

const transfersWrapped = SectionWrapper(Transfers, 'transfers');
export default transfersWrapped;
