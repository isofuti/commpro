import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
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

const CompanyName = styled.div`
  font-size: 1.2rem;
  color: #ffffff;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo.svg" alt="DAYNET" />
      </Logo>
      <CompanyName>АГЕНТСТВО РЕПУТАЦИОННОГО МАРКЕТИНГА</CompanyName>
    </HeaderContainer>
  );
};

export default Header; 