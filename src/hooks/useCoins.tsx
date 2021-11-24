import { useState, useEffect } from 'react';
import CoinsService from '../services/CoinsService';

const useCoins = () => {
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		(async () => {
			const coinList = await CoinsService.getAllCoins();
			setCoins(coinList.data);
		})();
	}, []);
	return [coins];
};

export default useCoins;
