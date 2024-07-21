import { BrowserRouter } from 'react-router-dom';

import { Excurs, Hero, Header, Sea, Hotels } from './components';
import VipTours from './components/VipTours';
import Transfers from './components/Transfers';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { useMediaQuery } from './assets/hooks/useMediaQuery';
import { $QickViewModal, closeQickViewModal } from './context/modals';
import { useUnit } from 'effector-react';
import Popup from './components/modules/Popup';
import { useEffect, useRef } from 'react';
import { removeOverflowHiddenFromBody } from './utils/common';

const App = () => {
  const isMedia880 = useMediaQuery(880);
  const quickViewIsOpen = useUnit($QickViewModal);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        quickViewIsOpen &&
        popupRef.current &&
        !(
          popupRef.current === e.target ||
          popupRef.current.contains(e.target as Node)
        )
      ) {
        removeOverflowHiddenFromBody()
        closeQickViewModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [quickViewIsOpen]);

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
          {!isMedia880 && <span className="sea__background__top"></span>}
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
        <div className="reviews__background">
          <span className="reviews__background__top"></span>
          <span className="reviews__background__bottom"></span>
          <Reviews />
        </div>
        <div className="footer__background">
          <Footer />
        </div>
        {quickViewIsOpen && (
          <div className="modal-opened">
            <div ref={popupRef}>
              <Popup />
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
