import { Coins, Portfolio } from './pages';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import ThemeProvider from './contexts/ThemeContext';
import CoinsProvider from './contexts/CoinsContext';
import UserProvider from './contexts/UserContext';
import GlobalStyles from './globalStyling';

const App = () => {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<UserProvider>
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
			</UserProvider>
		</ThemeProvider>
	);
};

export default App;
