import { SectionWrapper } from '../hoc';

const header = () => {
  return (
    <header className="header section">
      <nav className="container nav">
        <a href="/" className="nav__logo">
          <img
            className="nav__logo-img"
            src="./src/assets/logo.png"
            alt="Логотип компании АлтайЛесТрак"
            width="58"
            height="50"
          />
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="/about">
                О приложении
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="./contacts">
                Обратная связь
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="./faq">
                FAQ
              </a>
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
