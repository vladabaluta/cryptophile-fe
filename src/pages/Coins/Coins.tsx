import { useContext } from 'react';
import { CoinsContext } from '../../contexts/CoinsContext';
import ICoin from '../../interfaces/ICoin';
import { Table } from 'antd';
import { trimDecimals } from '../../utils/trimDecimals';
import * as S from './Coins.styles';
import { SortOrder } from 'antd/lib/table/interface';
import { UserContext } from '../../contexts/UserContext';
import emptyStarIcon from '../../assets/icons/empty-star.svg';
import starIcon from '../../assets/icons/star.svg';
import { Icon } from '../../components';

const columns = [
	{
		title: 'Coin',
		dataIndex: 'coin',
		key: 'coin',
	},
	{
		title: 'Price',
		dataIndex: 'rate',
		key: 'rate',
		sorter: (a: ICoin, b: ICoin) => a.rate - b.rate,
	},
	{
		title: 'Market Cap',
		dataIndex: 'capStr',
		key: 'capStr',
		defaultSortOrder: 'ascend' as SortOrder,
		sorter: (a: ICoin, b: ICoin) => a.cap - b.cap,
	},
	{
		title: 'Volume 24h',
		dataIndex: 'volumeStr',
		key: 'volumeStr',
		sorter: (a: ICoin, b: ICoin) => a.volume - b.volume,
	},
];

const Coins = () => {
	const { coins } = useContext(CoinsContext);
	const { favoriteCoins, addFavoriteCoin, removeFavoriteCoin } = useContext(UserContext);
	const displayFavorite = (coinCode: string) => {
		return favoriteCoins.includes(coinCode) ? (
			<Icon src={starIcon} alt='Is favored' height='16px' onClick={() => removeFavoriteCoin(coinCode)} />
		) : (
			<Icon src={emptyStarIcon} alt='Is not favored' height='14px' onClick={() => addFavoriteCoin(coinCode)} />
		);
	};
	return (
		<S.Coins>
			<Table
				loading={!coins.length}
				columns={columns}
				dataSource={coins.map((coin: ICoin) => {
					return {
						key: coin.code,
						coin: (
							<S.CoinCode>
								{displayFavorite(coin.code || '')} {coin.code}
							</S.CoinCode>
						),
						rate: trimDecimals(coin.rate, 5),
						capStr: coin.capStr,
						volumeStr: coin.volumeStr,
						cap: coin.cap,
						volume: coin.volume,
					};
				})}
			/>
		</S.Coins>
	);
};

export default Coins;
