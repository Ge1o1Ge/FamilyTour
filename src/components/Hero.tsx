import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="hero">
      <div className="">
        <h2 className="">HERO</h2>
      </div>
    </section>
  );
};

const HeroWrapped = SectionWrapper(Hero, "excurs");
export default HeroWrapped;
