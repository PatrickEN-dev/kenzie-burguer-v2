/* eslint-disable react/jsx-no-useless-fragment */
// /* eslint-disable react/jsx-no-undef */

import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { UserRequestContext } from '../contexts/user/UserRequestContext/UserRequestContext';

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserRequestContext);

  // const navigate = useNavigate();

  if (loading) {
    return (
      <div className='loading_theme'>
        <PacmanLoader loading={loading} color='#fad600' />
        <h2>Carregando...</h2>
      </div>
    );
  }

  return <>{user ? <Outlet /> : <Navigate to='/' />}</>;
};
