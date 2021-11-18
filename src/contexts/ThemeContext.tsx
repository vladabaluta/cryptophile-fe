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
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const toggleTheme = () => setIsDarkTheme((prevState) => !prevState);

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
