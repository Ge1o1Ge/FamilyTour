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
			<div className='company__info container'>
				<p>АО "Росчерк"</p>
				<p>ИНН: 9706045970</p>
				<p>ОГРН 1247700399550</p>
				<p>КПП 770601001</p>
				<p>Учередитель: Богачёв Игорь Александрович</p>
			</div>
    </footer>
  );
};

const headerWrapped = SectionWrapper(Footer, 'contacts', false);
export default headerWrapped;
