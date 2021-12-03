import styled from 'styled-components';

export const Coins = styled.div`
	margin: ${({ theme }) => theme.spacing.medium};
	padding: ${({ theme }) => theme.spacing.small};
`;

export const CoinCode = styled.div`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
