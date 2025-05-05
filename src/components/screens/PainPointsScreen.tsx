import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedContainer from '../common/AnimatedContainer';
import InteractiveCard from '../common/InteractiveCard';
import Header from '../common/Header';

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(74, 144, 226, 0.05) 0%,
    rgba(167, 74, 226, 0.05) 50%,
    rgba(74, 144, 226, 0.05) 100%
  );
  z-index: -1;
  pointer-events: none;
`;

const Screen = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  background: transparent;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Completion = styled.div`
  font-size: 1.5rem;
  color: #4a90e2;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #4a90e2, transparent);
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
  
  @media screen and (max-width: 1024px) {
    padding: 1.75rem;
  }
  
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media screen and (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  
  @media screen and (max-width: 768px) {
    font-size: 1.35rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-light);
  opacity: 0.9;
  line-height: 1.6;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const PainPointsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PainPointContent = styled.div`
  .number {
    color: #4a90e2;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    background: linear-gradient(135deg, #4a90e2, #a74ae2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
  
  .title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  .description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const painPoints = [
  {
    title: 'Нет раздела «Коротко о месте»',
    description: 'Важно добавить краткое описание, чтобы клиентам было понятно, что это за ЖК.'
  },
  {
    title: 'Нет stories',
    description: 'Создание stories поможет привлечь больше внимания пользователей к профилю.'
  },
  {
    title: 'Нет верификационного бейджа',
    description: 'Верификация поможет подтвердить вашу карточку как достоверную и надежную.'
  },
  {
    title: 'Менее 50 фото',
    description: 'Добавление большего количества фотографий поможет клиентам лучше оценивать расположение ЖК и инфраструктуру.'
  },
  {
    title: 'Нет витрины с меню и товарами',
    description: 'Важно предоставить информацию о доступных квартирах в этом или других ЖК.'
  },
  {
    title: 'Нет видео',
    description: 'Видеоролики могут помочь продемонстрировать уникальные особенности ЖК.'
  }
];

const PainPointsScreen: React.FC = () => {
  return (
    <>
      <GradientBackground />
      <Screen
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header />
        
        <Title>Выявленные болевые точки:</Title>
        <Completion>
          Карточка ЖК «Истории» на Яндекс.Картах заполнена на 50%.
        </Completion>
        
        <AnimatedContainer>
          <CardsContainer>
            {painPoints.map((point, index) => (
              <Card key={index}>
                <CardTitle>{point.title}</CardTitle>
                <CardDescription>{point.description}</CardDescription>
              </Card>
            ))}
          </CardsContainer>
        </AnimatedContainer>
      </Screen>
    </>
  );
};

export default PainPointsScreen; 