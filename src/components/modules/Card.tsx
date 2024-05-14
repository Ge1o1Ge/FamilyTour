import { useState } from 'react';
import { CardInterface } from '../../../types';
import { openQickViewModal } from '../../context/modals';
import { setPopupContent } from '../../context/popupContent';
import PopupContent from './PopupContent';
import { addOverflowHiddenToBody } from '../../utils/common';

const Card = ({
  card,
  className = '',
}: {
  card: CardInterface;
  className?: string;
}) => {
  const [] = useState(false);

  const handleOpenModal = () => {
    setPopupContent(<PopupContent card={card}/>)
    addOverflowHiddenToBody()
    openQickViewModal()
  }

  return (
    <div className={`${className ? `${className}__card` : ''} card`}>
      {card.startPrice !== '0' && (
        <span
          className={`${className ? `${className}__card__price` : ''} card__price`}
        >
          {' '}
          От {card.startPrice}
        </span>
      )}
      {(card.isHit || card.isNew) && (
        <div
          className={`${className ? `${className}__card__tags` : ''} card__tags`}
        >
          {card.isNew && (
            <span
              className={`${className ? `${className}__card__tag__new` : ''} card__tag__new`}
            >
              Новинка
            </span>
          )}
          {card.isHit && (
            <span
              className={`${className ? `${className}__card__tag__hit` : ''} card__tag__hit`}
            >
              Хит
            </span>
          )}
        </div>
      )}

      <img
        className={`${className ? `${className}__card__img` : ''} card__img`}
        src={card.img[0]}
        alt={card.name}
      />
      <p
        className={`${className ? `${className}__card__title` : ''} card__tittle`}
      >
        {card.name}
      </p>
      <p className={`${className ? `${className}__card__title ${className}__card__semi-title` : ''} card__tittle card__semi-title`}>
        {card.semiName}
      </p>
      <div
        className={`${className ? `${className}__card__buttons` : ''} card__buttons`}
      >
        <button
          className={`${className ? `${className}__card__order` : ''} card__order`}
        >
          Забронировать
        </button>
        <button
          className={`${className ? `${className}__card__about` : ''} card__about`}
          onClick={handleOpenModal}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default Card;
