import { CardInterface } from '../../types';
import { useMediaQuery } from '../assets/hooks/useMediaQuery';
import { hotelsCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import Card from './modules/Card';
import CardsSlider from './modules/CardsSlider';

const Hotels = () => {
  const isMedia1040 = useMediaQuery(1040);

  return (
    <div className="hotels">
      <div className="hotels__description">
        <h2 className="hotels__title">Бронирование отелей</h2>
      </div>
      {!isMedia1040 && (
        <div className="hotels__box">
          {hotelsCardsInfo.map((card) => (
            <Card
              key={card?.id}
              className="hotels"
              card={card as CardInterface}
            />
          ))}
        </div>
      )}
      {isMedia1040 && (
        <CardsSlider cards={hotelsCardsInfo} styleName='hotels'/>
      )}
    </div>
  );
};

const HotelsWrapped = SectionWrapper(Hotels, 'hotels');
export default HotelsWrapped;
