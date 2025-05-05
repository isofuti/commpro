import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
}

const ParallaxContainer = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const ParallaxEffect: React.FC<ParallaxProps> = ({ children, offset = 50 }) => {
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [elementTop - 500, elementTop + 500],
    [-offset, offset]
  );

  useEffect(() => {
    const element = document.getElementById('parallax-container');
    if (element) {
      setElementTop(element.offsetTop);
    }
  }, []);

  return (
    <ParallaxContainer id="parallax-container" style={{ y }}>
      {children}
    </ParallaxContainer>
  );
};

export default ParallaxEffect; 