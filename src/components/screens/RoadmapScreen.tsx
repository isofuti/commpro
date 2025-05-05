import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedContainer from '../common/AnimatedContainer';
import InteractiveCard from '../common/InteractiveCard';
import Header from '../common/Header';

const Screen = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

const RoadmapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  
  @media screen and (max-width: 1024px) {
    padding: 1.5rem;
  }
  
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-primary);
    opacity: 0.3;
  }
  
  @media screen and (max-width: 768px) {
    gap: 1.5rem;
    
    &::before {
      left: 1rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-primary);
  }
  
  @media screen and (max-width: 768px) {
    padding-left: 3rem;
    
    &::before {
      left: 1rem;
    }
  }
`;

const TimelineContent = styled.div`
  flex: 1;
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

const TimelineTitle = styled.h3`
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

const TimelineDescription = styled.p`
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

const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  & > *:last-child {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    & > *:last-child {
      grid-column: span 1;
    }
  }
`;

const PhaseContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  
  .duration {
    color: var(--color-primary);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    padding: 0.3rem 1rem;
    background: rgba(164, 201, 250, 0.1);
    border-radius: 20px;
    border: 1px solid rgba(164, 201, 250, 0.2);
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      color: var(--color-light);
      display: flex;
      align-items: flex-start;
      
      .number {
        color: var(--color-primary);
        margin-right: 0.5rem;
        font-weight: 500;
      }
    }
  }

  .note {
    margin-top: 1rem;
    font-style: italic;
    color: var(--color-gray);
    font-size: 0.9rem;
    padding-left: 1rem;
    border-left: 2px solid rgba(164, 201, 250, 0.3);
  }
`;

const Note = styled.div`
  font-size: 1rem;
  color: var(--color-gray);
  margin-top: 2rem;
  font-style: italic;
  text-align: center;
  padding: 1rem;
  background: rgba(164, 201, 250, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(164, 201, 250, 0.1);
`;

const phases = [
  {
    title: 'Подготовка',
    duration: '1-2 дня',
    tasks: [
      'Фиксация позиций и метрик',
      'Составление и отправка брифа',
      'Запрос медиа-материалов и услуг'
    ]
  },
  {
    title: 'Работы с карточкой',
    duration: '1 месяц',
    tasks: [
      'Получение креативов от дизайнера с корректировками',
      'Наполнение карточки',
      'Анализ выдачи и основных метрик',
      'Работа с разделом «Товары и услуги»'
    ]
  },
  {
    title: 'Продвижение карточки',
    duration: '1-2 месяца',
    tasks: [
      'Работа с рекламным кабинетом Яндекса с целью повышения позиций',
      'Внесение корректировок от клиента'
    ]
  },
  {
    title: 'Подготовка к поведенческому фактору',
    duration: '1 неделя',
    tasks: [
      'Подбор ключей для начала работ по поведенческому фактору',
      'Ожидание сохранений позиций карточки в алгоритмах Яндекса'
    ]
  },
  {
    title: 'Накрутка поведенческого фактора и поддержание',
    duration: 'От 1 месяца',
    tasks: [
      'Накрутка поведенческого фактора для продвижения и поддержания карточки в ТОП выдачи',
      'Внесение корректировок от клиента',
      'Работа с рекламным кабинетом Яндекса*'
    ],
    note: '* По согласованию с клиентом'
  }
];

const RoadmapScreen: React.FC = () => {
  return (
    <Screen
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <Title>Дорожная карта проекта:</Title>
      
      <AnimatedContainer>
        <RoadmapGrid>
          {phases.map((phase, index) => (
            <InteractiveCard key={index} depth={15}>
              <PhaseContent>
                <h3>{phase.title}</h3>
                <div className="duration">{phase.duration}</div>
                <ul>
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>
                      <span className="number">{taskIndex + 1}.</span>
                      {task}
                    </li>
                  ))}
                </ul>
                {phase.note && <div className="note">{phase.note}</div>}
              </PhaseContent>
            </InteractiveCard>
          ))}
        </RoadmapGrid>
      </AnimatedContainer>
      
      <Note>
        Примечание: Сроки реализации могут отличаться из-за длительного согласования.
      </Note>
    </Screen>
  );
};

export default RoadmapScreen; 