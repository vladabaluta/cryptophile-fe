import { Switch } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Icon } from '..';
import sunSvg from '../../assets/icons/sun.svg';
import moonSvg from '../../assets/icons/moon.svg';
import * as S from './ThemeSwitch.styles';
// import Icon from '@ant-design/icons';

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <S.Wrapper>
      <Switch
        onChange={() => toggleTheme()}
        unCheckedChildren={<Icon src={sunSvg} alt='Light theme' height='20px' />}
        checkedChildren={<Icon src={moonSvg} alt='Dark theme' height='20px' />}
        // unCheckedChildren={<Icon component={() => <SunSvg />} />}
        // checkedChildren={() => <Icon src={moonSvg} alt='Dark theme' />}
      />
    </S.Wrapper>
  );
};

export default ThemeSwitch;
