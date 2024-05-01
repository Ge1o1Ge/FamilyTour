import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { ReviewesInfoI } from '../../../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { star } from '../../assets';

const CardsSlider = ({
  cards,
  styleName,
}: {
  cards: ReviewesInfoI[];
  styleName: string;
}) => {
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    initialSlide: 0,
    centerPadding: '0',
    variableWidth: true,
    autoplaySpeed: 10000,
    arrows: false,
    afterChange: (index: number) => {
      setActiveIndex(index);
    },
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`${styleName}__slider slider`}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, i) => (
            <div className={`${styleName}__slider__card`} key={i}>
              <span className={`${styleName}__slider__time`}>
                {card.timeTag}
              </span>
              <span className={`${styleName}__slider__stars`}>
                {Array(card.stars)
                  .fill('')
                  .map((_, index) => (
                    <span className={`${styleName}__slider__star`} key={index}>
                      <img className={`${styleName}__slider__img`} src={star} alt="звезда" />
                    </span>
                  ))}
              </span>
              <p className={`${styleName}__slider__title`}>{card.title}</p>
              <p className={`${styleName}__slider__text`}>{card.description}</p>
              <p className={`${styleName}__slider__name`}>{card.name}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className={`${styleName}__slider__controller slider__controller`}>
        <button
          className={`${styleName}__slider__button slider__button ${styleName}__slider__button__left slider__button__left`}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          {`<`}
        </button>
        <p className={`${styleName}__slider__dotes slider__dotes`}>
          {cards.map((_img, i) => (
            <span
              key={i}
              className={`${styleName}__slider__dote slider__dote ${i === activeIndex ? `${styleName}__slider__dote--active slider__dote--active` : ''}`}
            ></span>
          ))}
        </p>
        <button
          className={`${styleName}__slider__button slider__button ${styleName}__slider__button__right slider__button__right`}
          onClick={() => sliderRef.current?.slickNext()}
        >
          {`>`}
        </button>
      </div>
    </>
  );
};

export default CardsSlider;
