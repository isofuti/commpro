import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TitleScreen from './components/screens/TitleScreen';
import StatisticsScreen from './components/screens/StatisticsScreen';
import PainPointsScreen from './components/screens/PainPointsScreen';
import ServicesScreen from './components/screens/ServicesScreen';
import RoadmapScreen from './components/screens/RoadmapScreen';
import BenefitsScreen from './components/screens/BenefitsScreen';
import SituationScreen from './components/screens/SituationScreen';
import AnalyticsScreen from './components/screens/AnalyticsScreen';
import AnimatedBackground from './components/AnimatedBackground';
import { screensConfig } from './config/screens';
import SidebarNavigation from './components/SidebarNavigation';
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
  analytics: AnalyticsScreen,
  statistics: StatisticsScreen,
  painPoints: PainPointsScreen,
  services: ServicesScreen,
  roadmap: RoadmapScreen,
  benefits: BenefitsScreen,
  situation: SituationScreen,
};

const App: React.FC = () => {
  const [screens, setScreens] = useState(screensConfig);
  const [titleData, setTitleData] = useState({
    title: 'Титульный экран',
    subtitle: 'Добро пожаловать!',
  });
  const isDev = process.env.NODE_ENV === 'development';
  const enabledScreens = screens.filter(s => s.enabled).sort((a, b) => a.order - b.order);

  // refs для секций
  const sectionRefs = useRef<{ [id: string]: HTMLElement | null }>({});
  const [activeScreenId, setActiveScreenId] = useState(enabledScreens[0]?.id || '');

  // IntersectionObserver для активного экрана
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length > 0) {
        // Берём тот, что ближе к верху
        const sorted = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveScreenId(sorted[0].target.id);
      } else {
        // Если ни один не виден, возможно, пользователь в самом низу — подсветить последний экран
        const last = enabledScreens[enabledScreens.length - 1];
        if (last) setActiveScreenId(last.id);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    });
    enabledScreens.forEach(screen => {
      const ref = sectionRefs.current[screen.id];
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [enabledScreens]);

  // scroll-to
  const handleNavigate = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <SidebarNavigation
        screens={enabledScreens}
        activeScreenId={activeScreenId}
        onNavigate={handleNavigate}
      />
      <AppContainer>
        <AnimatedBackground />
        {isDev && ScreenManager && (
          <ScreenManager screens={screens} setScreens={setScreens} />
        )}
        {enabledScreens.map(screen => {
          const refCallback = (el: HTMLElement | null) => {
            sectionRefs.current[screen.id] = el;
          };
          console.log('Rendering screen:', screen.id, 'enabled:', screen.enabled, 'order:', screen.order);
          if (screen.id === 'title') {
            return (
              <div key={screen.id} id={screen.id} ref={refCallback}>
                <TitleScreen
                  title={titleData.title}
                  subtitle={titleData.subtitle}
                  onChange={(field, value) => setTitleData(prev => ({ ...prev, [field]: value }))}
                  isDev={isDev}
                />
              </div>
            );
          }
          const ScreenComponent = screenComponents[screen.id as keyof typeof screenComponents];
          console.log(
            'Screen component for',
            screen.id,
            ':',
            typeof ScreenComponent === 'undefined' ? 'not found' : 'found'
          );
          if (!ScreenComponent) {
            console.error('No component found for screen:', screen.id);
            return null;
          }
          return (
            <div key={screen.id} id={screen.id} ref={refCallback}>
              <ScreenComponent />
            </div>
          );
        })}
      </AppContainer>
    </div>
  );
};

export default App; 