/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */

import { SetStateAction } from "react";

export interface iUserRequestContext {
  user: iUserLoginResponse | null;
  setUser: React.Dispatch<SetStateAction<iUserLoginResponse | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  createUserRequest: (data: iUserRegister) => Promise<iAxiosError | void>;
  loginUserRequest: (data: iUserLoginForm) => Promise<iAxiosError | void>;
}

export interface iAxiosError {
  status: string;
  message: string;
}

export interface iUserRegister {
  id: string;
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  error?: string | undefined;
  axiosError: iAxiosError;
}

export interface iUserData {
  id: string;
  name: string;
  email: string;
}

export interface iUserLoginResponse {
  accessToken: string;
  user: iUserData;
}

export interface iUserLoginForm {
  email: string;
  password: string;
  axiosErrors?: iAxiosError;
  error?: string | undefined;
}
