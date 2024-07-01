import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer className="footer section">
      <nav className="container nav">
        <a href="/" className="nav__logo">
          <img
            className="nav__logo-img"
            src="./src/assets/logo.png"
            alt="Логотип компании АлтайЛесТрак"
            width="58"
            height="50"
          />
          <span className="nav__logo__text">Росчерк</span>
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="/about">
                i.a.bogachev@roscherk.su
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/">
                Политика конфиденциальности
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

const headerWrapped = SectionWrapper(Footer, 'contacts', false);
export default headerWrapped;
