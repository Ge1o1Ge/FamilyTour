import { emailIcon, phoneIcon } from '../assets';
import { menuLinks, socialLinks, tgImages } from '../constants';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__inner__nav left__border">
          {menuLinks.map((link, i) => (
            <a
              className="footer__nav__link"
              href={link.link}
              key={`${link.name}${i}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="footer__inner__tg left__border">
          <a
            className="footer__inner__tg__link"
            href="https://t.me/+9PR0IhZB_R44OTUy"
          >
            @Familytour_sochi
          </a>
          <a
            className="footer__inner__tg__link footer__inner__tg__link__subscribe"
            href="https://t.me/+9PR0IhZB_R44OTUy"
          >
            Подписаться
          </a>
          <div className="footer__inner__tg__box">
            {tgImages.map((item, i) => (
              <img
                className="footer__inner__tg__box__img"
                src={item}
                alt="tg картинка"
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="footer__social left__border">
          <p className="footer__social__text">Социальные сети</p>
          <div className="footer__social__box">
            {socialLinks.map((link, i) => (
              <a
                className="footer__social__link"
                href={link.link}
                key={`${link.name}${i}`}
                target="_blank"
              >
                <img
                  className="footer__social__link__img"
                  src={link.src}
                  alt={link.description}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="footer__contacts left__border">
          <a className="footer__phone__link" href="tel:+79896321931">
            <img
              className="footer__phone__link__img"
              src={phoneIcon}
              alt="телефон"
            />
            <span className="footer__phone__link__text">
              +7 (989) 632-19-31
            </span>
          </a>
          <p className="footer__phone__time">пн-вс 8:00 - 22:00</p>
          <a
            className="footer__phone__link"
            href="mailto:Familytransfer_sochi@mail.ru"
          >
            <img
              className="footer__phone__link__img"
              src={emailIcon}
              alt="телефон"
            />
            <span className="footer__phone__link__text">
              Familytransfer_sochi@mail.ru
            </span>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom__text">2024© Family_Tour</p>
      </div>
    </footer>
  );
};

const headerWrapped = SectionWrapper(Footer, 'footer__section');
export default headerWrapped;
