import { SectionWrapper } from '../hoc';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <nav>
      <div className="">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <h2 className="">NAVBAR</h2>
      </div>
    </nav>
  );
};

const NavbarWrapped = SectionWrapper(Navbar, 'excurs');
export default NavbarWrapped;
