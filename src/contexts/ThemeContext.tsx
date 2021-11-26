import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createContext, useState } from 'react';
import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';
import IThemeContext from '../interfaces/IThemeContext';
import variables from '../themes/variables';

export const ThemeContext = createContext<IThemeContext>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: any) => {
  const themeColor = JSON.parse(localStorage.getItem('themeColor') as 'string');
  console.log('Theme Color', themeColor);
  const [isDarkTheme, setIsDarkTheme] = useState(themeColor || false);
  const toggleTheme = () =>
    setIsDarkTheme((prevState: boolean) => {
      localStorage.setItem('themeColor', JSON.stringify(!prevState));
      return !prevState;
    });
  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <StyledThemeProvider
        theme={isDarkTheme ? Object.assign(darkTheme, variables) : Object.assign(lightTheme, variables)}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
