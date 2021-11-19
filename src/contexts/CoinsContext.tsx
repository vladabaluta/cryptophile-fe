import { createContext } from 'react';
import useCoin from '../hooks/useCoins';
import ICoinsContext from '../interfaces/ICoinsContext';

export const CoinsContext = createContext<ICoinsContext>({ coins: [] });

const CoinsProvider = ({ children }: any) => {
  const [coins] = useCoin();

  return <CoinsContext.Provider value={{ coins }}>{children}</CoinsContext.Provider>;
};

export default CoinsProvider;
