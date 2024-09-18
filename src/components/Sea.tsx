import { CardInterface } from '../../types';
import { seaCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import Card from './modules/Card';

const Sea = () => {
  return (
    <div className="sea">
      <div className="sea__description">
        <h2 className="sea__title">Выход в Море</h2>
        <p className="sea__text">
          Окунитесь в атмосферу Черного моря с нашими роскошными морскими
          услугами! Откройте для себя уникальные прелести морских прогулок,
          аренды яхт, захватывающих дайвинг-приключений и роскошной рыбалки.
          Насладитесь уединением и красотой водных просторов, ощущая прилив
          эмоций в каждом мгновении вашего отдыха.
        </p>
        <p className="sea__text sea__tags">#Отдых_на_Море #Черное_Море </p>
      </div>
      <div className="sea__box">
        {seaCardsInfo.map((card) => (
          <Card key={card?.id} className='sea' card={card as CardInterface} />
        ))}
      </div>
    </div>
  );
};

const SeaWrapped = SectionWrapper(Sea, 'sea', true);
export default SeaWrapped;
