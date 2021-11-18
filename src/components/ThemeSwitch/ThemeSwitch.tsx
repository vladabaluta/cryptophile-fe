import { Switch } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Switch onChange={() => toggleTheme()} />;
};

export default ThemeSwitch;
