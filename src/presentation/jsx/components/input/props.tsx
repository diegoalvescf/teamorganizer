import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

export interface InputComponentProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
}
