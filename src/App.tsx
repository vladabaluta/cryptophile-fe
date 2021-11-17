import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Navbar } from './components';
import ThemeProvider from './contexts/ThemeContext';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
