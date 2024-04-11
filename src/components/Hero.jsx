import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="">
      <div className="text-white mt-[100px] ">
        <h2 className="text-[18px]">HERO</h2>
      </div>
    </section>
  );
};

const HeroWrapped = SectionWrapper(Hero, "excurs");
export default HeroWrapped;
