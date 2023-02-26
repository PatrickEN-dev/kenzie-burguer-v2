/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { iUserLogin, iUserRegister } from './interfaces/UserInterfaces';
import { API } from '../../../Services/API';

interface iUserRequestProviderProps {
  children: React.ReactNode;
}

interface iUserRequestContext {
  // user: null | boolean;
  // setUser: React.Dispatch<React.SetStateAction<null | boolean>>;
  // loading: boolean;
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  createUserRequest: (data: iUserRegister) => Promise<void>;
  loginUserRequest: (data: iUserLogin) => Promise<void>;
}

export const UserRequestContext = createContext<iUserRequestContext>(
  {} as iUserRequestContext
);

export const UserRequestProvider = ({
  children,
}: iUserRequestProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const createUserRequest = async (data: iUserRegister) => {
    try {
      await API.post('/users', data);

      toast.success('Cadastro realizado com sucesso!');

      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Não foi possível realizar o cadastro');
    }
  };

  const loginUserRequest = async (data: iUserLogin) => {
    try {
      const response = await API.post('/login', data);

      toast.success('Login realizado com sucesso!');

      const userID = response.data.user.id;
      const userToken = response.data.accessToken;

      localStorage.setItem('@USERTOKEN', userToken);
      localStorage.setItem('@USERID', userID);
      navigate(`/shop/${userID}`);
      
    } catch (error) {
      console.error(error);
      toast.error('Não foi possivel realizar o login');
    }
  };

  // const autoLogin = async () => {
  //   const token = localStorage.getItem('@TOKEN');

  //   if (token) {
  //     try {
  //       const response = await API.get('/login')

  //       setUser(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   autoLogin();
  // }, []);

  return (
    <UserRequestContext.Provider
      value={{ createUserRequest, loginUserRequest }}
    >
      {children}
    </UserRequestContext.Provider>
  );
};
