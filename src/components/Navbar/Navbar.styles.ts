import styled from 'styled-components';

export const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	padding: 0 2rem;
	background-color: aliceblue;
	height: 4rem;
	align-items: center;
	flex-wrap: wrap;
`;

export const Logo = styled.a`
	color: #7b7fda;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.7rem;
`;

export const Menu = styled.div`
	font-size: 1rem;
	transition: all 0.3 ease-in;
`;

export const LinkMenuItems = styled.a`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	transition: all 0.3s ease-in;
	font-size: 0.9rem;
`;
