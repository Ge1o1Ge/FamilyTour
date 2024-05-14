import { motion } from 'framer-motion';
import { $popupContent } from '../../context/popupContent';
import { useUnit } from 'effector-react';

const Popup = () => {
  const popupContent = useUnit($popupContent);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.5 }} 
      transition={{ duration: 0.3 }} 
    >
      <div>
        {popupContent}
      </div>
    </motion.div>
  );
};

export default Popup;
