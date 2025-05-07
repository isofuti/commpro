import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  depth?: number;
}

const Card = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(1000px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CardContent = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, depth = 20 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [depth, -depth]);
  const rotateY = useTransform(x, [-100, 100], [-depth, depth]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <Card
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default InteractiveCard; 