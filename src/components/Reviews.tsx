import { ReviewesInfoI } from '../../types';
import { reviewsCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import ReviewsSlider from './modules/ReviewsSlider';

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews__description section">
        <h2 className="reviews__title">Отзывы</h2>
      </div>
      <div className="reviews__box">
        <ReviewsSlider
          cards={reviewsCardsInfo as ReviewesInfoI[]}
          styleName="reviews"
        />
      </div>
    </div>
  );
};

const VipToursWrapped = SectionWrapper(Reviews, 'vipTours', false);
export default VipToursWrapped;
