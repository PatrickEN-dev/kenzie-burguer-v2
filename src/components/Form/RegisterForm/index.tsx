// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { iUserRegister } from '../../../contexts/user/UserRequestContext/interfaces/UserInterfaces';
import { UserRequestContext } from '../../../contexts/user/UserRequestContext/UserRequestContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { schemaRegisterUser } from '../../../validators/schemaRegisterUser';
import { Input } from '../Input';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(schemaRegisterUser),
    mode: 'onChange',
  });

  const { createUserRequest } = useContext(UserRequestContext);

  const onSubmit = (formData: iUserRegister) => {
    createUserRequest(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input label='Nome' type='text' {...register('name')} />
      {errors.name?.message}
      <Input label='Email' type='email' {...register('email')} />
      {errors.email?.message}
      <Input label='Senha' type='text' {...register('password')} />
      {errors.password?.message}
      <Input
        label='Confirme a senha'
        type='password'
        {...register('confirm_password')}
      />
      {errors.confirm_password?.message}
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
