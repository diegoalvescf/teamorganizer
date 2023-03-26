import React from 'react';
import { ButtonIconProps, ETypeButtonIcon } from './props';
import { Container, Icon } from './styles';

export const ButtonIconComponent: React.FC<ButtonIconProps> = ({
  icon,
  type,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Icon
        name={icon ? icon : 'add'}
        type={type}
      />
    </Container>
  );
};
