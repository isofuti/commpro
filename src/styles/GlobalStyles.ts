import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-dark: #1a1a1a;
    --color-light: #efeeed;
    --color-primary: #a4c9fa;
    --color-accent: #e2a54a;
    --color-gray: #666666;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto Flex', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-dark);
    color: var(--color-light);
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Days One', sans-serif;
    color: var(--color-primary);
    line-height: 1.2;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 2.75rem;
    }
    h3 {
      font-size: 2.25rem;
    }
    body {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    body {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2.25rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    body {
      font-size: 0.95rem;
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  input, button {
    font-family: inherit;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 2rem auto;

    input {
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      font-size: 1rem;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }

      &:focus {
        outline: none;
        border-color: #4a90e2;
      }
    }

    button {
      padding: 1rem;
      border-radius: 8px;
      border: none;
      background: #4a90e2;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background: #357abd;
      }
    }
  }

  ul {
    list-style-position: inside;
    margin: 1rem 0;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles; 