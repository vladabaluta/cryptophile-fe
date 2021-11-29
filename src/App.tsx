import { createGlobalStyle } from 'styled-components';
import { Coins, Portfolio } from './pages';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import ThemeProvider from './contexts/ThemeContext';
import CoinsProvider from './contexts/CoinsContext';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s linear;
    font-size: ${({ theme }) => theme.fonts.regular};

		& {			
			.ant-table-thead > tr > th {
				background-color : ${({ theme }) => theme.colors.tableHead};
				border-color: ${({ theme }) => theme.colors.tableBorder};
				color: ${({ theme }) => theme.colors.text};
			}
			.ant-table-thead th.ant-table-column-sort, .ant-table-thead th.ant-table-column-has-sorters:hover {
				background-color : ${({ theme }) => theme.colors.tableHeadSorted};
			}
			.ant-table-tbody > tr > td {
				background-color: ${({ theme }) => theme.colors.tableCell};
				border-color: ${({ theme }) => theme.colors.tableBorder};
				color: ${({ theme }) => theme.colors.text};
			}
			.ant-table-tbody > tr.ant-table-row:hover > td {
				background-color : ${({ theme }) => theme.colors.tableHeadSorted};
			}
			.ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link, .ant-pagination-item-active, .ant-pagination-item {
				background-color: ${({ theme }) => theme.colors.tableCell};
      }
      .ant-pagination-prev:hover .ant-pagination-item-link, .ant-pagination-next:hover .ant-pagination-item-link {
        color: ${({ theme }) => theme.colors.tablePaginationActive};
      }
      .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link{
        color: ${({ theme }) => theme.colors.tablePagination};
        border-color: ${({ theme }) => theme.colors.tablePagBorder};
      }
      .ant-pagination-disabled .ant-pagination-item-link, .ant-pagination-disabled:hover .ant-pagination-item-link, .ant-pagination-disabled:focus-visible .ant-pagination-item-link {
        color: ${({ theme }) => theme.colors.tablePaginationDisabled};
        border-color: ${({ theme }) => theme.colors.tablePagBorder};
      }
      .ant-pagination-item {
        border-color: ${({ theme }) => theme.colors.tablePagBorder};
        a {
          color: ${({ theme }) => theme.colors.tablePagination};
        }
        &:focus a, &:hover a {
          color: ${({ theme }) => theme.colors.tablePaginationActive};
        }
      }
      .ant-pagination-item-active {
        border-color: ${({ theme }) => theme.colors.tablePagBorderActive};
        a {
          color: ${({ theme }) => theme.colors.tablePaginationActive};
        }
      }
		}

  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <CoinsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate replace to='/coins' />} />
            <Route path='/coins' element={<Coins />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </Router>
      </CoinsProvider>
    </ThemeProvider>
  );
};

export default App;
