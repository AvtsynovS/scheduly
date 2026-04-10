import { useContext } from 'react';

import { ThemeContext } from '../../providers/ThemeProvider/ThemeContext';
import { SupportedTheme } from '../constants/types';
import { MoonIcon, SunIcon } from './icons';

import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 25px;
  cursor: pointer;
  background: ${({ theme }) => theme.controls.themeSwitcher.bg.default};

  transition: background 0.4s ease;
`;

const StyledThumb = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 2px;
  left: ${({ $isDark }) => ($isDark ? '2px' : '26px')};

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.controls.themeSwitcher.bg.accent};

  transition: all 0.4s ease;
  z-index: 2;

  box-shadow: ${({ theme }) => theme.boxShadows.theme};
`;

export const ThemeButton = () => {
  const { currentTheme, onChangeTheme } = useContext(ThemeContext);

  const isDark = currentTheme === SupportedTheme.DARK;

  const toggleTheme = () => {
    onChangeTheme(isDark ? SupportedTheme.LIGHT : SupportedTheme.DARK);
  };

  return (
    <StyledWrapper onClick={toggleTheme}>
      <StyledThumb $isDark={isDark}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </StyledThumb>
    </StyledWrapper>
  );
};
