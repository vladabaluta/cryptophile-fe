import { createContext } from 'react';
import useCoins from '../hooks/useCoins';
import ICoinsContext from '../interfaces/ICoinsContext';

export const CoinsContext = createContext<ICoinsContext>({ coins: [] });

const CoinsProvider = ({ children }: any) => {
	const [coins] = useCoins();

	return <CoinsContext.Provider value={{ coins }}>{children}</CoinsContext.Provider>;
};

export default CoinsProvider;
