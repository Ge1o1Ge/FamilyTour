import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Footer } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import FAQ from './pages/Faq';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
