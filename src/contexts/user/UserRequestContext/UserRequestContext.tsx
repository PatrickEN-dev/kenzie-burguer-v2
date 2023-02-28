/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  iAxiosError,
  iUserLoginForm,
  iUserLoginResponse,
  iUserRegister,
  iUserRequestContext,
} from './interfaces/UserInterfaces';
import { API } from '../../../Services/API';

interface iUserRequestProviderProps {
  children: React.ReactNode;
}

export const UserRequestContext = createContext<iUserRequestContext>(
  {} as iUserRequestContext
);

export const UserRequestProvider = ({
  children,
}: iUserRequestProviderProps) => {
  const [user, setUser] = useState<iUserLoginResponse | null>(null);
  const [loading, setLoading] = useState(true);

  let userID = localStorage.getItem('@USERID');
  let userToken = localStorage.getItem('@USERTOKEN');

  const navigate = useNavigate();

  const createUserRequest = async (data: iUserRegister) => {
    try {
      await API.post<iUserRegister>('/users', data);

      toast.success('Cadastro realizado com sucesso!');

      navigate('/');
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error('Não foi possível realizar o cadastro');
    }
  };

  const loginUserRequest = async (data: iUserLoginForm) => {
    try {
      const response = await API.post<iUserLoginResponse>('/login', data);

      userID = response.data.user.id;
      userToken = response.data.accessToken;

      localStorage.setItem('@USERTOKEN', userToken!);
      localStorage.setItem('@USERID', userID!);

      toast.success('Login realizado com sucesso!');
      setUser(response.data);

      navigate(`/shop/${userID}`);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error('Não foi possivel realizar o login');
    }
  };

  const autoLogin = async (userId: string | null) => {
    const token = localStorage.getItem('@USERTOKEN');

    if (token) {
      try {
        const response = await API.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        if (axios.isAxiosError<iAxiosError>(error)) {
          const errorMessage = error.response?.data?.message;
          toast.error(errorMessage);
        }
        console.error(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    autoLogin(userID);
  }, []);

  return (
    <UserRequestContext.Provider
      value={{
        createUserRequest,
        loginUserRequest,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserRequestContext.Provider>
  );
};
