import { CardInterface } from '../../types';
import { hotelsCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import Card from './modules/Card';

const Hotels = () => {
  return (
    <div className="hotels">
      <div className="hotels__description">
        <h2 className="hotels__title">Бронирование отелей</h2>
      </div>
      <div className="hotels__box">
        {hotelsCardsInfo.map((card) => (
          <Card key={card?.id} className="hotels" card={card as CardInterface} />
        ))}
      </div>
    </div>
  );
};

const HotelsWrapped = SectionWrapper(Hotels, 'hotels');
export default HotelsWrapped;
