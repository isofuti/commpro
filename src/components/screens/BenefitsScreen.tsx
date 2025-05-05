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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const BenefitContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #4a90e2, #a74ae2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #4a90e2, #a74ae2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const benefits = [
  {
    title: 'Опыт и Экспертиза',
    description: 'Более 5 лет успешной работы в сфере продвижения бизнеса в Яндекс.Картах. Наша команда знает все тонкости алгоритмов и требования платформы.'
  },
  {
    title: 'Комплексный Подход',
    description: 'Мы не просто продвигаем карточку, а создаем полноценную стратегию развития вашего присутствия в Яндекс.Картах, учитывая все аспекты бизнеса.'
  },
  {
    title: 'Прозрачность Работы',
    description: 'Регулярная отчетность и доступ к статистике. Вы всегда будете в курсе всех изменений и результатов нашей работы.'
  },
  {
    title: 'Индивидуальные Решения',
    description: 'Каждый проект уникален. Мы разрабатываем стратегию, учитывая специфику вашего бизнеса и целевой аудитории.'
  },
  {
    title: 'Современные Методы',
    description: 'Используем актуальные инструменты и методики продвижения, следим за обновлениями платформы и адаптируем стратегию под изменения.'
  },
  {
    title: 'Результативный Подход',
    description: 'Наша цель - не просто красивая карточка, а реальный рост вашего бизнеса через увеличение видимости и привлечение целевых клиентов.'
  }
];

const BenefitsScreen: React.FC = () => {
  return (
    <>
      <GradientBackground />
      <Screen
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header />
        
        <Title>Почему с нами выгодно работать:</Title>
        
        <AnimatedContainer>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <InteractiveCard key={index} depth={15}>
                <BenefitContent>
                  <h3>{benefit.title}</h3>
                  <div className="description">{benefit.description}</div>
                </BenefitContent>
              </InteractiveCard>
            ))}
          </BenefitsGrid>
        </AnimatedContainer>

        <ContactInfo>
          <h3>Готовы начать работу?</h3>
          <p>Свяжитесь с нами для обсуждения вашего проекта</p>
          <p>Email: info@daynet.pro</p>
          <p>Телефон: +7 (831) 228-22-00</p>
        </ContactInfo>
      </Screen>
    </>
  );
};

export default BenefitsScreen; 