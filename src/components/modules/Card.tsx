import { CardInterface } from '../../../types';

const Card = ({
  card,
  className = '',
}: {
  card: CardInterface;
  className?: string;
}) => {
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
        <div className={`${className ? `${className}__card__tags` : ''} card__tags`}>
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
      <h5 className={`${className ? `${className}__card__title` : ''} card__tittle`}>
        {card.name}
      </h5>
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
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default Card;
