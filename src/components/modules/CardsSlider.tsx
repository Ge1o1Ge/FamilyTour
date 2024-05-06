import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { CardInterface } from '../../../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import { useMediaQuery } from '../../assets/hooks/useMediaQuery';

const CardsSlider = ({
  cards,
  styleName,
}: {
  cards: CardInterface[];
  styleName: string;
}) => {
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMedia600 = useMediaQuery(600);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: isMedia600,
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
            <Card key={i} card={card} />
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
