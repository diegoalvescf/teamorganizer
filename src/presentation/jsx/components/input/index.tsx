import React, { useCallback } from 'react';
import { useTheme } from 'styled-components/native';
import { InputComponentProps } from './props';
import { Container } from './styles';

export const InputComponent: React.FC<InputComponentProps> = ({ ...rest }) => {
  const { colors } = useTheme();

  const Teste = useCallback(() => {}, []);

  return (
    <Container
      {...rest}
      placeholderTextColor={colors.gray_300}
    />
  );
};
