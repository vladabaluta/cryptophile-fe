import './App.css';
import { Navbar } from './components';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
