import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShopPage from '../pages/ShopPage';

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />

    <Route element={<ProtectedRoutes />}>
      <Route path='/shop/:id' element={<ShopPage />} />
    </Route>
  </Routes>
);
export default Router;
