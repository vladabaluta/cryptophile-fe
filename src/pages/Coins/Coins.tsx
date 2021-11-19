import { useContext } from 'react';
import { CoinsContext } from '../../contexts/CoinsContext';
import ICoin from '../../interfaces/ICoin';
import { Table, Tag, Space } from 'antd';
import * as S from './Coins.styles';

const coinSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Coin',
    dataIndex: 'coin',
    key: 'coin',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Market Cap',
    dataIndex: 'capStr',
    key: 'capStr',
  },
  {
    title: 'Volume 24h',
    dataIndex: 'volumeStr',
    key: 'volumeStr',
  },
];
const Coins = () => {
  const { coins } = useContext(CoinsContext);

  const func = (num: number) => {
    return num.toFixed(2);
  };
  console.log(coins);
  return (
    <S.Coins>
      <Table dataSource={coinSource} columns={columns} />
      {coins &&
        coins.map((coin: ICoin) => {
          return (
            <div key={coin.code}>
              <h1>{coin.code}</h1>
              <h4>{func(coin.rate)}</h4>
            </div>
          );
        })}
    </S.Coins>
  );
};

export default Coins;
