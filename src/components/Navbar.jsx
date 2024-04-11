import { SectionWrapper } from "../hoc";

const Navbar = () => {
  return (
    <nav>
      <div className="text-white">
        <div className="">
          
        </div>
        <h2 className="text-[18px]">NAVBAR</h2>
      </div>
    </nav>
  );
};


const NavbarWrapped = SectionWrapper(Navbar, "excurs");
export default NavbarWrapped;

