// eslint-disable-next-line import/no-extraneous-dependencies
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { iUserRegister } from '../../../contexts/user/UserRequestContext/interfaces/UserInterfaces';
import { UserRequestContext } from '../../../contexts/user/UserRequestContext/UserRequestContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { Input } from '../Input';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<iUserRegister>({
    mode: 'onChange',
  });

  const { createUserRequest } = useContext(UserRequestContext);

  const onSubmit = (formData: iUserRegister) => {
    createUserRequest(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input label='Nome' type='text' {...register('name')} />
      <Input label='Email' type='email' {...register('email')} />
      <Input label='Senha' type='text' {...register('password')} />
      <Input label='Confirme a senha' type='password' />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
