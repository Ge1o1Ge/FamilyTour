import { Link } from 'react-router-dom';
import { SectionWrapper } from '../hoc';

const header = () => {
  return (
    <header className="header section">
      <nav className="container nav">
        <Link to="/" className="nav__logo">
          <img
            className="nav__logo-img"
            src="/logo.png"
            alt="Логотип компании АлтайЛесТрак"
            width="58"
            height="50"
          />
        </Link>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/about">
                О приложении
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="./contacts">
                Обратная связь
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="./FAQ">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="nav__toggle"
          type="button"
          aria-label="Открыть меню"
        ></button>
      </nav>
    </header>
  );
};

const headerWrapped = SectionWrapper(header, 'header__section', false);
export default headerWrapped;
