import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: system-ui, 'Segoe UI', Roboto, sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    /* line-height: 1.45; */
    letter-spacing: 0.18px;
    color: ${({ theme }) => theme.colors.default};
    background-color: ${({ theme }) => theme.bg.default};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  h1, h2 {
    font-family: system-ui, 'Segoe UI', Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.default};
    font-weight: 500;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    letter-spacing: -1.68px;
    margin: ${({ theme }) => `${theme.spaces.xl} 0`};

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      margin: ${({ theme }) => `${theme.spaces.l} 0`};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    /* line-height: 118%; */
    letter-spacing: -0.24px;
    margin: ${({ theme }) => `0 0 ${theme.spaces.xs}`};

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }

  p {
    margin: 0;
  }
`;
