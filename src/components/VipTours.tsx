import { CardInterface } from '../../types';
import { vipToursCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import CardsSlider from './modules/CardsSlider';

const VipTours = () => {
  return (
    <div className="vip-tours">
      <div className="vip-tours__description">
        <h2 className="vip-tours__title">VIP Туры</h2>
        <p className="vip-tours__text">
          Исследуйте Черное море с элегантными VIP турами! Откройте для себя
          роскошь побережья в уединении, наслаждаясь приватными экскурсиями и
          особым вниманием к вашему комфорту. Роскошные отели, эксклюзивные
          мероприятия, идеальное обслуживание – все для вашего незабываемого
          отдыха!
        </p>
        <p className="vip-tours__text vip-tours__tags">
          #VIPтуры #Черное_Море{' '}
        </p>
      </div>
      <div className="vip-tours__box">
        <CardsSlider
          cards={vipToursCardsInfo as CardInterface[]}
          styleName="vip-tours"
        />
      </div>
    </div>
  );
};

const VipToursWrapped = SectionWrapper(VipTours, 'vipTours', false);
export default VipToursWrapped;
