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
				У нас Вы можете забронировать индивидуальный тур в любом направлении и
          маршруту, экскурсия, которая будет проходить без спешки. Любое
          направление: Обзорная по Сочи, Красная Поляна и конечно же Абхазия. Мы
          покажем все красоты нашей природы на курорте, а опытные водители гиды
          профессионально расскажут о истории и интересных фактах о каждом
          объекте. У нас всегда чистые авто, аккуратное вождение, для самых
          маленьких детское кресло. Заполните нашу форму бронирования, наш
          менеджер свяжется с вами и разработает маршрут для вашей компании по
          вашим предпочтениям.
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
