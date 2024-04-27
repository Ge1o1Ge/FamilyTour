import { useEffect, useState } from 'react';
import { SectionWrapper } from '../hoc';

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
            <div className="transfers__form__fields__dates">
              <p className="transfers__form__text">Даты трансфера</p>
              <label htmlFor="transfers__form__input__date1">Туда:</label>
              <input
                id="transfers__form__input__date1"
                type="date"
                defaultValue={placeholderDate}
                min={placeholderDate}
              />
              <input
                id="transfers__form__input__time1"
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
                    defaultValue="22:00"
                  />
                </>
              )}
            </div>
            <div className="transfers__form__fields__places">
              <label htmlFor="transfers__form__input__from">
                Откуда забрать:
              </label>
              <input
                id="transfers__form__input__from"
                type="text"
                placeholder="аэропорт Сочи"
              />
              <label htmlFor="transfers__form__input__to">
                Куда доставить:
              </label>
              <input
                id="transfers__form__input__to"
                type="text"
                placeholder="отель Парадайз"
              />
            </div>
            <div className="transfers__form__fields__details">
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
              <label htmlFor="transfers__form__input__phone">
                Телефон:
              </label>
              <input
                id="transfers__form__input__phone"
                type="text"
                placeholder="+7-911-123-45-67"
                pattern="\+\d{1,3}-\d{3}-\d{3}-\d{2}-\d{2}"
              />
              <label htmlFor="transfers__form__input__name">
                Имя:
              </label>
              <input
                id="transfers__form__input__name"
                type="text"
                placeholder="Петр Иванович"
              />
            </div>
          </div>
        </div>
        <div className="transfers__form__right">
          <h2 className="transfers__form__title">Выбор тарифа</h2>
          <div className="transfers__form__carousel">выбор вариантов</div>
        </div>
      </form>
      <div className="transfers__form__cars">машинки слайдер</div>
      <div className="transfers__box"></div>
    </div>
  );
};

const transfersWrapped = SectionWrapper(Transfers, 'transfers');
export default transfersWrapped;
