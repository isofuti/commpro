import React, { useState } from 'react';
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
  font-family: 'Days One', sans-serif;
  font-size: 4rem;
  font-weight: normal;
  margin-bottom: -0.5rem;
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
  margin-bottom: 0rem;
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

const MAX_TITLE = 50;
const MAX_SUBTITLE = 100;
const MAX_COMPANY = 40;
const MAX_CITY = 40;
const MAX_DATE = 20;
const MAX_VALID = 40;

interface TitleScreenProps {
  title: string;
  subtitle: string;
  onChange?: (field: string, value: string) => void;
  isDev?: boolean;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ title, subtitle, onChange, isDev }) => {
  const [editField, setEditField] = useState<null | string>(null);
  const [inputValue, setInputValue] = useState('');
  const [company, setCompany] = useState('Комосстрой');
  const [city, setCity] = useState('г. Ижевск');
  const [date, setDate] = useState('от 24.04.2025');
  const [valid, setValid] = useState('ПРЕДЛОЖЕНИЕ ДЕЙСТВИТЕЛЬНО ДО 24.05.2025г.');

  const handleEdit = (field: string, value: string) => {
    setEditField(field);
    setInputValue(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (editField && onChange && (editField === 'title' || editField === 'subtitle')) {
      onChange(editField, inputValue);
    } else if (editField === 'company') {
      setCompany(inputValue);
    } else if (editField === 'city') {
      setCity(inputValue);
    } else if (editField === 'date') {
      setDate(inputValue);
    } else if (editField === 'valid') {
      setValid(inputValue);
    }
    setEditField(null);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  return (
    <Screen
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Logo>DAYNET</Logo>
      <Subtitle>АГЕНТСТВО РЕПУТАЦИОННОГО МАРКЕТИНГА</Subtitle>
      <Title>
        {editField === 'title' ? (
          <>
            <input
              type="text"
              value={inputValue}
              autoFocus
              maxLength={MAX_TITLE}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              style={{
                fontSize: '1.5em',
                fontWeight: 'bold',
                padding: '2px 8px',
                width: '80%',
                borderRadius: 6,
                border: '1px solid #ccc',
                boxSizing: 'border-box',
                textAlign: 'center',
                color: 'var(--color-primary)',
                background: 'transparent',
              }}
            />
            <span style={{ fontSize: '0.8em', marginLeft: 8, color: '#888' }}>
              {inputValue.length}/{MAX_TITLE}
            </span>
          </>
        ) : (
          <>
            <span>{title}</span>
            {isDev && (
              <button
                style={{
                  marginLeft: 8,
                  fontSize: '1em',
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  display: 'inline-block',
                }}
                onClick={() => handleEdit('title', title)}
                title="Редактировать заголовок"
              >
                ✏️
              </button>
            )}
          </>
        )}
      </Title>
      <Subheading>
        {editField === 'subtitle' ? (
          <>
            <input
              type="text"
              value={inputValue}
              autoFocus
              maxLength={MAX_SUBTITLE}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              style={{
                fontSize: '1.1em',
                padding: '2px 8px',
                width: '90%',
                borderRadius: 6,
                border: '1px solid #ccc',
                boxSizing: 'border-box',
                textAlign: 'center',
                background: 'transparent',
              }}
            />
            <span style={{ fontSize: '0.8em', marginLeft: 8, color: '#888' }}>
              {inputValue.length}/{MAX_SUBTITLE}
            </span>
          </>
        ) : (
          <>
            <span>{subtitle}</span>
            {isDev && (
              <button
                style={{
                  marginLeft: 8,
                  fontSize: '1em',
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  display: 'inline-block',
                }}
                onClick={() => handleEdit('subtitle', subtitle)}
                title="Редактировать подзаголовок"
              >
                ✏️
              </button>
            )}
          </>
        )}
      </Subheading>
      <CompanyInfo>
        {editField === 'company' ? (
          <>
            <input
              type="text"
              value={inputValue}
              autoFocus
              maxLength={MAX_COMPANY}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              style={{
                fontSize: '1.1em',
                padding: '2px 8px',
                width: '90%',
                borderRadius: 6,
                border: '1px solid #ccc',
                boxSizing: 'border-box',
                textAlign: 'center',
                background: 'transparent',
              }}
            />
            <span style={{ fontSize: '0.8em', marginLeft: 8, color: '#888' }}>
              {inputValue.length}/{MAX_COMPANY}
            </span>
          </>
        ) : (
          <>
            <span>{company}</span>
            {isDev && (
              <button
                style={{
                  marginLeft: 8,
                  fontSize: '1em',
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  display: 'inline-block',
                }}
                onClick={() => handleEdit('company', company)}
                title="Редактировать компанию"
              >
                ✏️
              </button>
            )}
          </>
        )}
      </CompanyInfo>
      <CompanyInfo>
        {editField === 'city' ? (
          <>
            <input
              type="text"
              value={inputValue}
              autoFocus
              maxLength={MAX_CITY}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              style={{
                fontSize: '1.1em',
                padding: '2px 8px',
                width: '90%',
                borderRadius: 6,
                border: '1px solid #ccc',
                boxSizing: 'border-box',
                textAlign: 'center',
                background: 'transparent',
              }}
            />
            <span style={{ fontSize: '0.8em', marginLeft: 8, color: '#888' }}>
              {inputValue.length}/{MAX_CITY}
            </span>
          </>
        ) : (
          <>
            <span>{city}</span>
            {isDev && (
              <button
                style={{
                  marginLeft: 8,
                  fontSize: '1em',
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  display: 'inline-block',
                }}
                onClick={() => handleEdit('city', city)}
                title="Редактировать город"
              >
                ✏️
              </button>
            )}
          </>
        )}
      </CompanyInfo>
      <Date>
        {editField === 'date' ? (
          <>
            <input
              type="text"
              value={inputValue}
              autoFocus
              maxLength={MAX_DATE}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              style={{
                fontSize: '1.1em',
                padding: '2px 8px',
                width: '90%',
                borderRadius: 6,
                border: '1px solid #ccc',
                boxSizing: 'border-box',
                textAlign: 'center',
                background: 'transparent',
              }}
            />
            <span style={{ fontSize: '0.8em', marginLeft: 8, color: '#888' }}>
              {inputValue.length}/{MAX_DATE}
            </span>
          </>
        ) : (
          <>
            <span>{date}</span>
            {isDev && (
              <button
                style={{
                  marginLeft: 8,
                  fontSize: '1em',
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  display: 'inline-block',
                }}
                onClick={() => handleEdit('date', date)}
                title="Редактировать дату"
              >
                ✏️
              </button>
            )}
          </>
        )}
      </Date>
      <ValidUntil
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {editField === 'valid' ? (
          <>
            <input
              type="text"
              value={inputValue}
              autoFocus
              maxLength={MAX_VALID}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              style={{
                fontSize: '1.1em',
                padding: '2px 8px',
                width: '90%',
                borderRadius: 6,
                border: '1px solid #ccc',
                boxSizing: 'border-box',
                textAlign: 'center',
                background: 'transparent',
              }}
            />
            <span style={{ fontSize: '0.8em', marginLeft: 8, color: '#888' }}>
              {inputValue.length}/{MAX_VALID}
            </span>
          </>
        ) : (
          <>
            <span>{valid}</span>
            {isDev && (
              <button
                style={{
                  marginLeft: 8,
                  fontSize: '1em',
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  display: 'inline-block',
                }}
                onClick={() => handleEdit('valid', valid)}
                title="Редактировать срок действия"
              >
                ✏️
              </button>
            )}
          </>
        )}
      </ValidUntil>
    </Screen>
  );
};

export default TitleScreen; 