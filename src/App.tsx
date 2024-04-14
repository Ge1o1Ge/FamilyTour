import { BrowserRouter } from 'react-router-dom';

import { Excurs, Hero, Header } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="header__background">
          <span className="header__background__left"></span>
          <span className="header__background__right"></span>
          <Header />
        </div>
        <div className="hero__background">
          <Hero />
        </div>
        <div className="excurs__background">
          <Excurs />
          <span className="excurs__background__top"></span>
          <span className="excurs__background__mountain"></span>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
