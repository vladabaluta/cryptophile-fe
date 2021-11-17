import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';
import { createGlobalStyle } from 'styled-components';
import { createContext, useState } from 'react';
import IThemeContext from '../interfaces/IThemeContext';

const GlobalStyles = createGlobalStyle`

  `;

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IThemeContext>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: any) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme((prevState) => !prevState);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <GlobalStyles />
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
