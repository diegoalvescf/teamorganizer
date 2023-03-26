import React from 'react';
import { FilterComponentProps } from './props';
import { Container, Title } from './styles';

export const FilterComponent: React.FC<FilterComponentProps> = ({
  title,
  isActive = false,
  ...rest
}) => {
  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
};
