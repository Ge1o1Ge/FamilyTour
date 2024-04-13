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
        <Excurs />
      </div>
    </BrowserRouter>
  );
};

export default App;
