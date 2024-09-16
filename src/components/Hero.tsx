import { useState, useEffect, useRef, MouseEvent } from 'react';
import { arrows, menuIcon, slides } from '../assets';
import { useMediaQuery } from '../assets/hooks/useMediaQuery';
import { menuLinks } from '../constants';
import { SectionWrapper } from '../hoc';
import MainSlider from './modules/HeroSlider';

const Hero = () => {
  const isMedia900 = useMediaQuery(900);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', (ev) => handleClickOutside(ev as unknown as MouseEvent));
    } else {
      document.removeEventListener('mousedown', (ev) => handleClickOutside(ev as unknown as MouseEvent));
    }

    return () => {
      document.removeEventListener('mousedown', (ev) => handleClickOutside(ev as unknown as MouseEvent));
    };
  }, [isMenuOpen]);

  return (
    <div className="hero">
      {!isMedia900 && (
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
      )}
      {isMedia900 && (
        <div className="hero__nav_mobile">
          <button className="hero__nav_mobile__button" onClick={toggleMenu}>
            <img src={menuIcon} alt="показать меню" />
          </button>
          <div ref={menuRef} className={`hero__nav_mobile__menu ${isMenuOpen ? 'open' : ''}`}>
            <button className="popup__close__btn hero__nav_mobile__menu__close" onClick={toggleMenu}><img src={arrows.close} alt="закрыть" /></button>
            {menuLinks.map((link, i) => (
              <a
                className="hero__nav_mobile__menu__link"
                href={link.link}
                key={`${link.name}${i}`}
                onClick={() => setIsMenuOpen(false)}  // Close the menu when a link is clicked
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="hero__box">
        <div className="hero__slider">
          {/* <MainSlider images={slides} /> */}
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
