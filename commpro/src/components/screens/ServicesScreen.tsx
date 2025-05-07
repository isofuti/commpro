import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Screen = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const PriceList = styled(motion.div)`
  margin-bottom: 3rem;
`;

const PriceItem = styled(motion.div)`
  background: rgba(164, 201, 250, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;
  border: 1px solid rgba(164, 201, 250, 0.1);
  
  .price {
    color: var(--color-primary);
    font-weight: bold;
  }
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media screen and (max-width: 1024px) {
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

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
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

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  
  @media screen and (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServiceTitle = styled.h3`
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

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-light);
  opacity: 0.9;
  line-height: 1.6;
  flex-grow: 1;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const services = [
  {
    title: 'Анализ текущей карточки',
    description: 'Проведем аудит вашей карточки в Яндекс.Картах, выявим слабые места и составим план по улучшению.'
  },
  {
    title: 'Оптимизация контента',
    description: 'Наполним карточку качественным контентом: фотографии, описание, режим работы, контакты и другая важная информация.'
  },
  {
    title: 'Работа с отзывами',
    description: 'Поможем привлечь положительные отзывы от реальных клиентов и грамотно ответим на существующие.'
  },
  {
    title: 'Работа с рейтингом',
    description: 'Удаление негатива, привлечение отзывов реальных клиентов, поддержание высокого рейтинга.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServicesScreen: React.FC = () => {
  return (
    <Screen
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      <Title>Стоимость услуг:</Title>
      
      <PriceList variants={containerVariants} initial="hidden" animate="visible">
        <PriceItem variants={itemVariants}>
          Первые 3 месяца работ – <span className="price">80 000 рублей / мес.</span>
        </PriceItem>
        <PriceItem variants={itemVariants}>
          Поддержание – <span className="price">35 000 рублей / мес.</span>
        </PriceItem>
        <PriceItem variants={itemVariants}>
          Рекламный бюджет оплачивается отдельно, напрямую в ЛК Яндекс – <span className="price">от 20 000 рублей</span>
        </PriceItem>
        <PriceItem variants={itemVariants}>
          Разработка индивидуального дизайна оплачивается отдельно
        </PriceItem>
      </PriceList>
      
      <Title>В работы входит:</Title>
      
      <ServicesGrid variants={containerVariants} initial="hidden" animate="visible">
        {services.map((service, index) => (
          <ServiceCard key={index} variants={itemVariants}>
            <ServiceIcon>
              {/* Add appropriate icon based on the service */}
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Screen>
  );
};

export default ServicesScreen; 