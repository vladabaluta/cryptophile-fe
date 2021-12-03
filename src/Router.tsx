import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import { Coins, Login, Portfolio, Register } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate replace to='/coins' />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
