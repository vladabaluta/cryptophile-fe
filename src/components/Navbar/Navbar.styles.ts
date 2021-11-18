import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.5s linear;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.colors.logo};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.75rem;
  padding: 0.75rem 0;

  &:active {
    color: ${({ theme }) => theme.colors.logo};
  }
`;

export const Menu = styled.div``;

export const LinkMenuItems = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.logo};
  }
  &:active {
    color: ${({ theme }) => theme.colors.navText};
  }
`;
