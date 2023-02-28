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
      <Input
        error={errors.name?.message}
        label='Nome'
        type='text'
        {...register('name')}
      />

      <Input
        error={errors.email?.message}
        label='Email'
        type='email'
        {...register('email')}
      />

      <Input
        error={errors.password?.message}
        label='Senha'
        type='text'
        {...register('password')}
      />

      <Input
        error={errors.confirm_password?.message}
        label='Confirme a senha'
        type='password'
        {...register('confirm_password')}
      />

      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
