export interface iUserRegister {
  name: string;
  email: string;
  password: string;
  error?: string | undefined;
}

export type iUserLogin = Omit<iUserRegister, 'name'>;
