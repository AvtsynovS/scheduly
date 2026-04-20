import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSize.md};

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};

    font-synthesis: none;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
      text-rendering: optimizeLegibility;
  }

  p {
    margin: 0;
  }
`;
