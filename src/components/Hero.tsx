import { slides } from '../assets';
import { menuLinks } from '../constants';
import { SectionWrapper } from '../hoc';
import MainSlider from './modules/HeroSlider';

//TODO мфассив объектов с данными для картинок

const Hero = () => {
  return (
    <div className="hero">
      <nav className="hero__nav">
        {menuLinks.map((link, i) => (
          <a
            className="hero__nav__link"
            href={link.link}
            key={`${link.name}${i}`}
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="hero__box">
        <div className="hero__slider">
          <MainSlider images={[slides.slide1, slides.slide1]}/> 
        </div>
        <div className="hero__namer">
          <h1 className="hero__namer__header">
            Незабываемый отдых по Черноморскому побережью
          </h1>
          <span className="hero__namer__line"></span>
        </div>
      </div>
    </div>
  );
};

const HeroWrapped = SectionWrapper(Hero, 'hero__section');
export default HeroWrapped;
