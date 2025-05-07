import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from './Slide';

const AnalyticsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

interface AnalyticsSlideProps {
  id: string;
  title: string;
}

const staticData = [
  { label: 'Общая площадь', value: '10,000 м²' },
  { label: 'Количество квартир', value: '150' },
  { label: 'Стоимость от', value: '5.2 млн ₽' },
  { label: 'Срок сдачи', value: 'Q4 2024' },
  { label: 'Этажность', value: '25' },
  { label: 'Отделка', value: 'Под ключ' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const AnalyticsSlide: React.FC<AnalyticsSlideProps> = ({
  id,
  title,
}) => {
  return (
    <Slide
      id={id}
      title={title}
      content=""
      type="analytics"
      isEnabled={true}
    >
      <AnalyticsContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {staticData.map((item, index) => (
          <StatCard key={index} variants={itemVariants}>
            <StatValue>{item.value}</StatValue>
            <StatLabel>{item.label}</StatLabel>
          </StatCard>
        ))}
      </AnalyticsContainer>
    </Slide>
  );
};

export default AnalyticsSlide; 