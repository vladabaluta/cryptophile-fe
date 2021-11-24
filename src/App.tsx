import { createGlobalStyle } from 'styled-components';
import { Coins, Portfolio } from './pages';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import ThemeProvider from './contexts/ThemeContext';
import CoinsProvider from './contexts/CoinsContext';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    font-size: ${({ theme }) => theme.fonts.regular};
  }
`;

const App = () => {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<CoinsProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Navigate replace to='/coins' />} />
						<Route path='/coins' element={<Coins />} />
						<Route path='/portfolio' element={<Portfolio />} />
					</Routes>
				</Router>
			</CoinsProvider>
		</ThemeProvider>
	);
};

export default App;
