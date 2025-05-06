import React, { useState } from 'react';
import styled from 'styled-components';
import { screensConfig } from '../../config/screens';
import { exportConfig } from '../../config/exportConfig';

const ManagerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: white;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin: 0 0 15px 0;
  font-size: 1.2rem;
`;

const ScreenList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

const ScreenItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const Label = styled.label`
  flex: 1;
  cursor: pointer;
`;

const OrderControls = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ExportButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  background: rgba(74, 144, 226, 0.3);

  &:hover {
    background: rgba(74, 144, 226, 0.4);
  }
`;

const ScreenManager: React.FC = () => {
  const [screens, setScreens] = useState(screensConfig);

  const handleToggleScreen = (id: string) => {
    setScreens(screens.map(screen => 
      screen.id === id ? { ...screen, enabled: !screen.enabled } : screen
    ));
  };

  const handleMoveScreen = (id: string, direction: 'up' | 'down') => {
    const currentIndex = screens.findIndex(screen => screen.id === id);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === screens.length - 1)
    ) {
      return;
    }

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    const newScreens = [...screens];
    const [movedScreen] = newScreens.splice(currentIndex, 1);
    newScreens.splice(newIndex, 0, movedScreen);

    setScreens(newScreens.map((screen, index) => ({
      ...screen,
      order: index + 1
    })));
  };

  const handleExport = () => {
    exportConfig(screens);
  };

  return (
    <ManagerContainer>
      <Title>Управление слайдами</Title>
      <ScreenList>
        {screens.map(screen => (
          <ScreenItem key={screen.id}>
            <Checkbox
              type="checkbox"
              checked={screen.enabled}
              onChange={() => handleToggleScreen(screen.id)}
            />
            <Label>{screen.title}</Label>
            <OrderControls>
              <Button onClick={() => handleMoveScreen(screen.id, 'up')}>↑</Button>
              <Button onClick={() => handleMoveScreen(screen.id, 'down')}>↓</Button>
            </OrderControls>
          </ScreenItem>
        ))}
      </ScreenList>
      <ExportButton onClick={handleExport}>
        Экспортировать конфигурацию
      </ExportButton>
    </ManagerContainer>
  );
};

export default ScreenManager; 