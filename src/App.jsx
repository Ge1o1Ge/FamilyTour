import { BrowserRouter } from "react-router-dom";

import {
  ExcursWrapped,
  HeroWrapped,
  Navbar,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <HeroWrapped />
        <ExcursWrapped />
      </div>
    </BrowserRouter>
  );
};

export default App;
