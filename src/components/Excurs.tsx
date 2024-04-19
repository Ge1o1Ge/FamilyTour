import { CardInterface } from '../../types';
import { excursCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import CardsSlider from './modules/CardsSlider';

const Excurs = () => {
  return (
    <div className="excurs">
      <div className="excurs__description">
        <h2 className="excurs__title">VIP Туры</h2>
        <p className="excurs__text">
          Откройте для себя магию Черноморского побережья в увлекательных
          экскурсиях! Погрузитесь в красоту местных пейзажей, исторических
          достопримечательностей и неповторимой атмосферы. Насладитесь комфортом
          и интересными впечатлениями вместе с нами!
        </p>
        <p className="excurs__text excurs__tags">#ОтпускМечты #Черное_Море </p>
      </div>
      <div className="excurs__box">
        <CardsSlider cards={excursCardsInfo as CardInterface[]} styleName='excurs'/>
      </div>
    </div>
  );
};

const ExcursWrapped = SectionWrapper(Excurs, 'excurs', false);
export default ExcursWrapped;
