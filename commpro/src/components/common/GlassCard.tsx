import React from 'react';
import styled from 'styled-components';

export const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  width: 1136px;
  max-width: 100vw;
  margin: 0 auto;
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 95vw;
    padding: 1.5rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
`; 