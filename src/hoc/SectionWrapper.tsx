import React, { ComponentType } from "react";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "../utils/motion";

interface SectionWrapperProps {
  idName?: string;
}

const SectionWrapper = <P extends object>(
  WrappedComponent: ComponentType<P>,
  idSeclector: string = "",
  isSection: boolean = true,
) => {
  const variants: Variants = staggerContainer();

  const HOC: React.FC<SectionWrapperProps & P> = ({ idName: sectionId, ...rest }) => {
    return (
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${isSection ? 'section' : 'section__vide'} ${idSeclector}`}
      >
        {idSeclector && <span className="hash-span" id={idSeclector}>&nbsp;</span>}
        <WrappedComponent {...rest as P} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;