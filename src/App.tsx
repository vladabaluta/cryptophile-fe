import ThemeProvider from './contexts/ThemeContext';
import CoinsProvider from './contexts/CoinsContext';
import GlobalStyles from './globalStyling';
import Router from './Router';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <CoinsProvider>
        <Router />
      </CoinsProvider>
    </ThemeProvider>
  );
};

export default App;
