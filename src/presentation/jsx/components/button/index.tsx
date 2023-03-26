import React from 'react';
import { ButtonProps, ModeButton } from './props';
import { Container, Title } from './styles';

export const ButtonComponent: React.FC<ButtonProps> = ({
  type = ModeButton.create,
  title,
  ...rest
}) => {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
};
