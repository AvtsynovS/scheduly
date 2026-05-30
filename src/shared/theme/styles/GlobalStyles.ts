import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
}

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSize.md};

    background: ${({ theme }) => theme.bg.secondary};
    color: ${({ theme }) => theme.colors.default};

    font-synthesis: none;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.colors.default};
    font-family: ${({ theme }) => theme.fonts.heading};
      text-rendering: optimizeLegibility;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
