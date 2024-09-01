import { CardInterface } from '../../../types';
import { arrows } from '../../assets';
import { closeQickViewModal, openQickViewModal } from '../../context/modals';
import { setPopupContent } from '../../context/popupContent';
import { addOverflowHiddenToBody, removeOverflowHiddenFromBody } from '../../utils/common';
import PopupBookingForm from './PopupBookingForm';

const PopupContent = ({ card }: { card: CardInterface }) => {
  const handleCloseModal = () => {
    removeOverflowHiddenFromBody();
    closeQickViewModal();
  };

	const handleOpenOrder = () => {
    setPopupContent(<PopupBookingForm card={card}/>)
		removeOverflowHiddenFromBody();
    closeQickViewModal();
		setTimeout(()=>{
			addOverflowHiddenToBody()
			openQickViewModal()
		}, 300)
  }

  return (
    <div className="popup">
      <button className="popup__close__btn" onClick={handleCloseModal}>
        <img src={arrows.close} alt="закрыть" />
      </button>
      <div className="popup__left">
        <img
          className="popup__left__img"
          src={card.img[0]}
          alt={`${card.name} картинка`}
        />
      </div>
      <div className="popup__right">
        <p className="popup__right__title">{card.name}</p>
        <p className="popup__right__description">{card.description.info}</p>
        {card.description.marshrut.length > 0 && (
          <div className="popup__right__section">
            <p className="popup__right__section__title">Маршрут:</p>
            <ul className="popup__right__list">
              {card.description.marshrut.map((item, index) => (
                <li key={index} className="popup__right__list__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="popup__right__time">
          Расписание: {card.description.time}
        </p>
        {card.description.dopUslugi.length > 0 && (
          <div className="popup__right__section">
            <p className="popup__right__section__title">
              Дополнительные услуги:
            </p>
            <ul className="popup__right__list">
              {card.description.dopUslugi.map((item, index) => (
                <li key={index} className="popup__right__list__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="popup__order__box">
        {card.startPrice !== '0' && (
          <p className="popup__right__price">Цена: {card.startPrice}</p>
        )}
          <button className={`popup__order card__order`} onClick={handleOpenOrder}>Забронировать</button>
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
