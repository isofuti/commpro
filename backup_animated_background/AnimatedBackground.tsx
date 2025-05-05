import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0a0a0a;
  overflow: hidden;
  z-index: -1;
`;

const GradientsContainer = styled.div`
  height: 100%;
  width: 100%;
  filter: blur(60px);
`;

const GradientBlob = styled.div<{
  color: string;
  size: string;
  animation: string;
  position?: string;
}>`
  position: absolute;
  background: radial-gradient(circle at center, ${props => props.color} 0, ${props => props.color}00 70%) no-repeat;
  mix-blend-mode: screen;
  width: ${props => props.size};
  height: ${props => props.size};
  opacity: 0.3;
  ${props => props.position === 'left' && `
    left: -20%;
    top: 50%;
    transform: translateY(-50%);
  `}
  ${props => props.position === 'right' && `
    right: -20%;
    top: 50%;
    transform: translateY(-50%);
  `}
  ${props => props.position === 'top' && `
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
  `}
  ${props => props.position === 'bottom' && `
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
  `}
  animation: ${props => props.animation};
`;

const InteractiveBlob = styled.div<{ x: number; y: number }>`
  position: absolute;
  background: radial-gradient(circle at center, rgba(140, 100, 255, 0.4) 0, rgba(140, 100, 255, 0) 70%) no-repeat;
  mix-blend-mode: screen;
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
  opacity: 0.4;
  border-radius: 50%;
  transform: translate(${props => props.x}px, ${props => props.y}px);
  transition: transform 0.1s ease-out;
`;

const AnimatedBackground: React.FC = () => {
  return (
    <Background>
      <GradientsContainer>
        <GradientBlob
          color="rgba(164, 201, 250, 0.4)"
          size="100%"
          animation="moveLeft 15s ease infinite"
          position="left"
        />
        <GradientBlob
          color="rgba(124, 176, 250, 0.4)"
          size="100%"
          animation="moveRight 15s ease infinite"
          position="right"
        />
        <GradientBlob
          color="rgba(124, 231, 247, 0.4)"
          size="100%"
          animation="moveTop 15s ease infinite"
          position="top"
        />
        <GradientBlob
          color="rgba(127, 99, 243, 0.4)"
          size="100%"
          animation="moveBottom 15s ease infinite"
          position="bottom"
        />
      </GradientsContainer>
    </Background>
  );
};

export default AnimatedBackground; 