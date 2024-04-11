import { SectionWrapper } from "../hoc";

const Excurs = () => {
  return (
    <section className="">
      <div className="text-white mt-[100px] ">
        <h2 className="text-[18px]">HERO</h2>
      </div>
    </section>
  );
};

const ExcursWrapped = SectionWrapper(Excurs, "excurs");
export default ExcursWrapped;
