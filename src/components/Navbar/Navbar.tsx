import { ThemeSwitch } from '..';
import * as S from './Navbar.styles';

const Navbar = (props: any) => {
	return (
		<S.Navbar>
			<S.Logo>Cryptophile</S.Logo>
			<S.Menu>
				<ThemeSwitch />
				<S.LinkMenuItems to='/coins'>Coins</S.LinkMenuItems>
				<S.LinkMenuItems to='/portfolio'>Portofolio</S.LinkMenuItems>
				<S.LinkMenuItems to='/'>Login</S.LinkMenuItems>
				<S.LinkMenuItems to='/'>Register</S.LinkMenuItems>
			</S.Menu>
		</S.Navbar>
	);
};

export default Navbar;
