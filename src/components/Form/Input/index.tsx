import { forwardRef, InputHTMLAttributes } from 'react';
import { TextFieldProps } from '@mui/material';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, type, error, ...rest }, ref) => (
    <fieldset>
      <StyledTextField
        label={label}
        type={type}
        ref={ref}
        {...(rest as TextFieldProps)}
      />
      {error ? (
        <StyledParagraph fontColor='red'>{error}</StyledParagraph>
      ) : null}
    </fieldset>
  )
);
