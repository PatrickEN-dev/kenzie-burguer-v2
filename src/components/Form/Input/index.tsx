import { forwardRef } from 'react';
import { TextFieldProps } from '@mui/material';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

type IInputProps = {
  label: string;
  error?: string | undefined;
} & TextFieldProps;

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, type, error, ...rest }, ref) => (
    <fieldset>
      <StyledTextField label={label} type={type} ref={ref} {...rest} />
      {error && <StyledParagraph fontColor='red'>{error}</StyledParagraph>}
    </fieldset>
  )
);
