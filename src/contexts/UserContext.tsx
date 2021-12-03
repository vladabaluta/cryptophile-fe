import { createContext, useState } from 'react';
import IUserContext from '../interfaces/IUserContext';

export const UserContext = createContext<IUserContext>({
	favoriteCoins: [],
	addFavoriteCoin: (coinCode: string) => {},
	removeFavoriteCoin: (coinCode: string) => {},
});

const UserProvider = ({ children }: any) => {
	const favCoins = JSON.parse(localStorage.getItem('favoriteCoins') as 'string');
	const [favoriteCoins, setFavoriteCoins] = useState(favCoins || []);

	const addFavoriteCoin = (coinCode: string) => {
		setFavoriteCoins((prevState: string[]) => {
			const newFavoriteCoins = [...prevState, coinCode];
			localStorage.setItem('favoriteCoins', JSON.stringify(newFavoriteCoins));
			return newFavoriteCoins;
		});
	};

	const removeFavoriteCoin = (coinCode: string) => {
		setFavoriteCoins((prevState: string[]) => {
			const newFavoriteCoins = prevState.filter((code) => code !== coinCode);
			localStorage.setItem('favoriteCoins', JSON.stringify(newFavoriteCoins));
			return newFavoriteCoins;
		});
	};

	return (
		<UserContext.Provider value={{ favoriteCoins, addFavoriteCoin, removeFavoriteCoin }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
