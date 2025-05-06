import React from 'react';
import styled from 'styled-components';
import TitleScreen from './components/screens/TitleScreen';
import StatisticsScreen from './components/screens/StatisticsScreen';
import PainPointsScreen from './components/screens/PainPointsScreen';
import ServicesScreen from './components/screens/ServicesScreen';
import RoadmapScreen from './components/screens/RoadmapScreen';
import BenefitsScreen from './components/screens/BenefitsScreen';
import AnimatedBackground from './components/AnimatedBackground';
import { productionConfig } from './config/production-config';
import './App.css';

// Импортируем ScreenManager только в режиме разработки
const ScreenManager = process.env.NODE_ENV === 'development' 
  ? require('./components/admin/ScreenManager').default 
  : null;

const AppContainer = styled.div`
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
`;

const screenComponents = {
  title: TitleScreen,
  statistics: StatisticsScreen,
  painPoints: PainPointsScreen,
  services: ServicesScreen,
  roadmap: RoadmapScreen,
  benefits: BenefitsScreen,
};

function App() {
  return (
    <AppContainer>
      <AnimatedBackground />
      {process.env.NODE_ENV === 'development' && <ScreenManager />}
      {productionConfig.screens.map(screen => {
        const ScreenComponent = screenComponents[screen.id as keyof typeof screenComponents];
        return <ScreenComponent key={screen.id} />;
      })}
    </AppContainer>
  );
}

export default App; 