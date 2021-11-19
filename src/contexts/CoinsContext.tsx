import { createContext } from 'react';
import useCoin from '../hooks/useCoins';
import ICoinsContext from '../interfaces/ICoinsContext';

export const CoinsContext = createContext<ICoinsContext | null>(null);

const CoinsProvider = ({ children }: any) => {
	const [coins] = useCoin();

	return <CoinsContext.Provider value={{ coins }}>{children}</CoinsContext.Provider>;
};

export default CoinsProvider;
