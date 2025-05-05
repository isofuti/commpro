import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Screen = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: var(--color-light);
  opacity: 0.9;
  
  @media screen and (max-width: 1024px) {
    font-size: 1.35rem;
    max-width: 700px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    max-width: 600px;
    padding: 0 1rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-primary);
  
  @media screen and (max-width: 1024px) {
    font-size: 3.5rem;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media screen and (max-width: 375px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    padding: 0 0.5rem;
  }
`;

const Subheading = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-align: center;
  
  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  @media screen and (max-width: 375px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`;

const CompanyInfo = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Date = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ValidUntil = styled(motion.div)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  font-size: 1.2rem;
`;

const TitleScreen: React.FC = () => {
  return (
    <Screen
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Logo>DAYNET</Logo>
      <Subtitle>АГЕНТСТВО РЕПУТАЦИОННОГО МАРКЕТИНГА</Subtitle>
      <Title>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</Title>
      <Subheading>ПО ГЕО-МАРКЕТИНГУ</Subheading>
      <CompanyInfo>Комосстрой</CompanyInfo>
      <CompanyInfo>г. Ижевск</CompanyInfo>
      <Date>от 24.04.2025</Date>
      <ValidUntil
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        ПРЕДЛОЖЕНИЕ ДЕЙСТВИТЕЛЬНО ДО 24.05.2025г.
      </ValidUntil>
    </Screen>
  );
};

export default TitleScreen; 