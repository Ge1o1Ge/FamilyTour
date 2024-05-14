import { CardInterface } from '../../../types';
import { arrows } from '../../assets';
import { closeQickViewModal } from '../../context/modals';
import { removeOverflowHiddenFromBody } from '../../utils/common';

const PopupContent = ({ card }: { card: CardInterface }) => {
  const handleCloseModal = () => {
    removeOverflowHiddenFromBody();
    closeQickViewModal();
  };

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
        <p className="popup__right__text popup__right__title">{card.name}</p>
        <p className="popup__right__text">{card.description.info}</p>
        {card.startPrice !== '0' && (
          <p className="popup__right__text popup__right__price">
            {card.startPrice}
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupContent;
