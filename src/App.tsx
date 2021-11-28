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
