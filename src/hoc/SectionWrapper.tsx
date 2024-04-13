import React, { ComponentType } from "react";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../globalStyles/styles";

interface SectionWrapperProps {
  idName?: string;
}

const SectionWrapper = <P extends object>(
  WrappedComponent: ComponentType<P>,
  idName: string = ""
) => {
  const variants: Variants = staggerContainer();

  const HOC: React.FC<SectionWrapperProps & P> = ({ idName: sectionId, ...rest }) => {
    return (
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className='section'
      >
        {idName && <span className="hash-span" id={idName}>&nbsp;</span>}
        <WrappedComponent {...rest as P} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;