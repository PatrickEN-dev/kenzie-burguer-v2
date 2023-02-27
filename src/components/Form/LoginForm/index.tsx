/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { iUserLogin } from '../../../contexts/user/UserRequestContext/interfaces/UserInterfaces';
import { UserRequestContext } from '../../../contexts/user/UserRequestContext/UserRequestContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { schemaLoginUser } from '../../../validators/schemaLoginUser';
import { Input } from '../Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(schemaLoginUser),
    mode: 'onChange',
  });

  const { loginUserRequest } = useContext(UserRequestContext);

  const submit = (formData: iUserLogin) => {
    loginUserRequest(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label='Email' type='email' {...register('email')} />
      {errors.email?.message}
      <Input label='Senha' type='password' {...register('password')} />
      {errors.password?.message}
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};
export default LoginForm;
