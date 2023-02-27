/* eslint-disable camelcase */
export interface iUserRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  error?: string | undefined;
}

export type iUserLogin = Omit<iUserRegister, 'name' | 'confirm_password'>;
