import React from 'react';
import styled, { css } from 'styled-components';

interface SidebarNavigationProps {
  screens: { id: string; title: string; enabled: boolean; order: number }[];
  activeScreenId: string;
  onNavigate: (id: string) => void;
}

const Sidebar = styled.nav`
  position: fixed;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const NavItem = styled.button<{ active: boolean }>`
  background: linear-gradient(135deg, #a4c9fa 0%, #4a90e2 100%);
  border: none;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  box-shadow: 0 2px 8px rgba(74,144,226,0.15);
  cursor: pointer;
  position: relative;
  outline: none;
  transition: box-shadow 1.2s, transform 1.2s, background 1.2s, width 1.2s, border-radius 1.2s;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px 0 8px;
  overflow: hidden;
  ${({ active }) =>
    active
      ? css`
          box-shadow: 0 0 0 4px #e2a54a44, 0 2px 8px rgba(74,144,226,0.25);
          background: linear-gradient(135deg, #e2a54a 0%, #a4c9fa 100%);
          transform: scale(1.12);
          width: 180px;
          border-radius: 28px;
          justify-content: flex-start;
        `
      : css`
          &:hover {
            width: 180px;
            border-radius: 28px;
            justify-content: flex-start;
          }
        `}
`;

const Label = styled.span<{ active: boolean }>`
  display: block;
  margin-left: 16px;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  ${props => (props.active) && css`
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.1s;
  `}
  ${NavItem}:hover & {
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.1s;
  }
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.85;
  flex-shrink: 0;
`;

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ screens, activeScreenId, onNavigate }) => {
  return (
    <Sidebar>
      {screens.map(screen => (
        <NavItem
          key={screen.id}
          active={screen.id === activeScreenId}
          onClick={() => onNavigate(screen.id)}
          aria-label={screen.title}
        >
          <Dot />
          <Label active={screen.id === activeScreenId}>{screen.title}</Label>
        </NavItem>
      ))}
    </Sidebar>
  );
};

export default SidebarNavigation; 