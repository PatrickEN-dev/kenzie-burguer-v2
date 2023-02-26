/* eslint-disable import/no-extraneous-dependencies */
import * as yup from 'yup';

export const schemaLogin = yup.object({
  email: yup.string().email().required('Insira um email'),
  password: yup.string().required('Insira uma senha para continuar'),
});
