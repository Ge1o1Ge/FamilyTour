import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <div className="hero">
      Petia
    </div>
  );
};

const HeroWrapped = SectionWrapper(Hero, 'hero__section');
export default HeroWrapped;
