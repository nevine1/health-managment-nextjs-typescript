// src/components/PasswordField.tsx
import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { CustomFieldProps } from '../../../types/page';

interface CustomTextFieldProps{
    fullWidth: boolean;
    name: string;
    label: string;
    value: string;
    type: string;
    variant: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error: boolean;
    helperText: React.ReactNode;
    }

const CustomTextField = ({
  fullWidth= true,
  name,
  label,
  type,
  variant = "outlined",
  value,
  onChange,
  onBlur,
  error,
  helperText
}: CustomTextFieldProps) => {
  return (
    <TextField
      fullWidth
      name={name}
      label={label}
      type={type}
      variant="outlined"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    
    />
  );
};

export default CustomTextField;
