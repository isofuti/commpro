import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children, ...props }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer; 