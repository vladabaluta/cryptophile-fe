import * as S from './Navbar.styles';

const Navbar = (props: any) => {
	return (
		<S.Navbar>
			<S.Logo>Cryptophile</S.Logo>
			<S.Menu>
				<S.LinkMenuItems href="">Coins</S.LinkMenuItems>
				<S.LinkMenuItems href="">Portofolio</S.LinkMenuItems>
				<S.LinkMenuItems href="">Exchanges</S.LinkMenuItems>
				<S.LinkMenuItems href="">Login</S.LinkMenuItems>
				<S.LinkMenuItems href="">Register</S.LinkMenuItems>
			</S.Menu>
		</S.Navbar>
	);
};

export default Navbar;
