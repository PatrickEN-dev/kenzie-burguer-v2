/* eslint-disable react/jsx-no-useless-fragment */

import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { UserRequestContext } from '../contexts/user/UserRequestContext/UserRequestContext';
import { StyledLoadingTheme } from '../styles/loading';

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserRequestContext);

  if (loading) {
    return (
      <StyledLoadingTheme className='loading_theme'>
        <SyncLoader loading={loading} color='#01e400' />
      </StyledLoadingTheme>
    );
  }

  return <>{user ? <Outlet /> : <Navigate to='/' />}</>;
};
