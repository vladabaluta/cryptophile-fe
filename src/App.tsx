import { createGlobalStyle } from 'styled-components';
import { Coins, Portfolio } from './pages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
			<Router>
				<Navbar />
				<Route path="/coins">
					<Coins />
				</Route>
				<Portfolio />
			</Router>
		</ThemeProvider>
	);
};

export default App;
