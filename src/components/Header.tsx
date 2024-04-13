import { SectionWrapper } from '../hoc';
import { logo, phoneIcon } from '../assets';
import { socialLinks } from '../constants';

const header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__social">
          {socialLinks.map((link, i) => (
            <a
              className="header__social__link"
              href={link.link}
              key={`${link.name}${i}`}
              target="_blank"
            >
              <img
                className="header__social__link__img"
                src={link.src}
                alt={link.description}
              />
            </a>
          ))}
        </div>
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="логотип" />
        </div>
        <div className="header__phone">
          <a className="header__phone__link" href="tel:+79896321931">
            <img
              className="header__phone__link__img"
              src={phoneIcon}
              alt="телефон"
            />
            <span className="header__phone__link__text">
              +7 (989) 632-19-31
            </span>
          </a>
          <p className="header__phone__time">пн-вс 8:00 - 22:00</p>
        </div>
      </div>
    </header>
  );
};

const headerWrapped = SectionWrapper(header, 'excurs');
export default headerWrapped;
