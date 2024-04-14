import { CardInterface } from '../../../types';

const Card = ({ card }: { card: CardInterface }) => {
  return (
    <div className="card">
      {card.startPrice && <span className="card__price"> От {card.startPrice}</span>}
      {(card.isHit || card.isNew) && (
        <div className="card__tags">
          {card.isNew && <span className="card__tag__new">Новинка</span>}
          {card.isHit && <span className="card__tag__hit">Хит</span>}
        </div>
      )}

      <img className="card__img" src={card.img[0]} alt={card.name} />
      <h5 className="card__tittle">{card.name}</h5>
      <div className="card__buttons">
        <button className="card__order">Забронировать</button>
        <button className="card__about">Подробнее</button>
      </div>
    </div>
  );
};

export default Card;
