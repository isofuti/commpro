import React from 'react';
import styled from 'styled-components';
import TitleScreen from './components/screens/TitleScreen';
import StatisticsScreen from './components/screens/StatisticsScreen';
import PainPointsScreen from './components/screens/PainPointsScreen';
import ServicesScreen from './components/screens/ServicesScreen';
import RoadmapScreen from './components/screens/RoadmapScreen';
import BenefitsScreen from './components/screens/BenefitsScreen';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
`;

function App() {
  return (
    <AppContainer>
      <AnimatedBackground />
      <TitleScreen />
      <StatisticsScreen />
      <PainPointsScreen />
      <ServicesScreen />
      <RoadmapScreen />
      <BenefitsScreen />
    </AppContainer>
  );
}

export default App; 