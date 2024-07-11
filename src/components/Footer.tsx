import { Link } from 'react-router-dom';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer className="footer section">
      <nav className="container nav">
        <Link to="/" className="nav__logo">
          <img
            className="nav__logo-img"
            src="/logo.png"
            alt="Логотип компании АлтайЛесТрак"
            width="58"
            height="50"
          />
          <span className="nav__logo__text">Росчерк</span>
        </Link>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="mailto:support@roscherk.su">
							 support@roscherk.su
              </a>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/privacy-policy">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

const headerWrapped = SectionWrapper(Footer, 'contacts', false);
export default headerWrapped;
