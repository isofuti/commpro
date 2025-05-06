import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedNumber from '../common/AnimatedNumber';
import InteractiveCard from '../common/InteractiveCard';
import ParallaxEffect from '../common/ParallaxEffect';

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
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media screen and (max-width: 1024px) {
    gap: 2rem;
    padding: 1.5rem;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media screen and (max-width: 1024px) {
    padding: 2rem;
  }
  
  @media screen and (max-width: 768px) {
    padding: 1.75rem;
  }
  
  @media screen and (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const StatValue = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 2.75rem;
    margin-bottom: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.35rem;
  color: var(--color-light);
  opacity: 0.9;
  line-height: 1.4;
  
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

const SearchStats = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  grid-column: 1 / -1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 3rem;
  backdrop-filter: blur(10px);
  
  h3 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #4ae250, #e2a54a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.35rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.4;
  }
  
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    padding: 2.5rem;
    
    h3 {
      font-size: 3.5rem;
      margin-bottom: 1.25rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }
  
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 2rem;
    
    h3 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.15rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    padding: 1.5rem;
    
    h3 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.1rem;
    }
  }
`;

const StatisticsScreen: React.FC = () => {
  return (
    <Screen
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Статистика за март:</Title>
      
      <Location>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
        </svg>
        ЖК Истории<br />
        Ижевск, ул. 9-я Подлесная
      </Location>
      
      <ParallaxEffect>
        <StatsContainer>
          <InteractiveCard>
            <StatCard>
              <StatValue>
                <AnimatedNumber value={127} />
              </StatValue>
              <StatLabel>Конкуренты в радиусе пяти километров</StatLabel>
            </StatCard>
          </InteractiveCard>
          
          <InteractiveCard>
            <StatCard>
              <StatValue>
                <AnimatedNumber value={4599} formatValue={(val) => val.toLocaleString()} />
              </StatValue>
              <StatLabel>Показы ЖК в результатах поиска</StatLabel>
              <div className="comparison">У лучшего конкурента: 10 210</div>
            </StatCard>
          </InteractiveCard>
          
          <InteractiveCard>
            <StatCard>
              <StatValue>
                <AnimatedNumber value={866} />
              </StatValue>
              <StatLabel>Открытие профиля ЖК</StatLabel>
              <div className="comparison">У лучшего конкурента: 1 900</div>
            </StatCard>
          </InteractiveCard>
          
          <SearchStats>
            <h3>
              <AnimatedNumber value={1597} formatValue={(val) => val.toLocaleString()} />
            </h3>
            <p>Поисков по рубрикам, к которым относится карточка</p>
          </SearchStats>
        </StatsContainer>
      </ParallaxEffect>
    </Screen>
  );
};

export default StatisticsScreen; 