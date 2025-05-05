import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Slide as SlideType } from '../types';

const SlideContainer = styled(motion.section)<{ $backgroundStyle?: SlideType['backgroundStyle'] }>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  background: ${props => 
    props.$backgroundStyle?.gradient || 
    props.$backgroundStyle?.image ? 
    `url(${props.$backgroundStyle.image}) no-repeat center center / cover` : 
    'transparent'
  };

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

interface SlideProps extends SlideType {
  children?: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ 
  id, 
  title, 
  content, 
  backgroundStyle,
  children 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <SlideContainer
      id={id}
      $backgroundStyle={backgroundStyle}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideVariants}
    >
      <Content>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </Title>
        {children || (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </Content>
    </SlideContainer>
  );
};

export default Slide; 