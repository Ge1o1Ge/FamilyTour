import { BrowserRouter } from 'react-router-dom';

import { Excurs, Hero, Header, Sea, Hotels } from './components';
import VipTours from './components/VipTours';
import Transfers from './components/Transfers';

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
        <div className="vip-tours__background">
          <span className="vip-tours__background__top"></span>
          <VipTours />
        </div>
        <div className="sea__background">
          <span className="sea__background__top"></span>
          <Sea />
        </div>
        <div className="hotels__background">
          <span className="hotels__background__top"></span>
          <span className="hotels__background__bottom"></span>
          <Hotels />
        </div>
        <div className="transfers__background">
          <span className="transfers__background__top"></span>
          <span className="transfers__background__bottom"></span>
          <Transfers />
        </div>
        <div className="hotels__background">
          <span className="hotels__background__top"></span>
          <span className="hotels__background__bottom"></span>
          <Hotels />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
