import { ThemeSwitch } from '..';
import * as S from './Navbar.styles';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Logo>Cryptophile</S.Logo>
      <S.Menu>
        <ThemeSwitch />
        <S.LinkMenuItems to='/coins'>Coins</S.LinkMenuItems>
        <S.LinkMenuItems to='/portfolio'>Portofolio</S.LinkMenuItems>
        <S.LinkMenuItems to='/login'>Login</S.LinkMenuItems>
        <S.LinkMenuItems to='/register'>Register</S.LinkMenuItems>
      </S.Menu>
    </S.Navbar>
  );
};

export default Navbar;
