import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlider = ({ images }: { images: string[] }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    variableWidth: true,
    autoplaySpeed: 3000,
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
    <div
      className="hero__slider"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div className="hero__slider__box" key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="hero__slider__img"
            />
          </div>
        ))}
      </Slider>
      <div className="hero__slider__controller">
        <button
          className="hero__slider__button hero__slider__button__left"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          {`<`}
        </button>
        <p className="hero__slider__dotes">
          {images.map((_img, i) => (
            <span
              key={i}
              className={`hero__slider__dote ${i === activeIndex ? 'hero__slider__dote--active' : ''}`}
            ></span>
          ))}
        </p>
        <button
          className="hero__slider__button hero__slider__button__right"
          onClick={() => sliderRef.current?.slickNext()}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
