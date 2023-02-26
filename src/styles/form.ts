import { TextField, TextFieldProps } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

type StyledTextFieldProps = TextFieldProps & {
  variant?: 'standard' | 'outlined' | 'filled';
};

export const StyledTextField = styled(TextField)<StyledTextFieldProps>`
  width: 100%;

  input {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colors.primary}!important;
      outline-color: ${({ theme }) => theme.colors.primary}!important;
    }
  }
`;
