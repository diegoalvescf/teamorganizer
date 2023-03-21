import React from 'react';
import { GroupCardProps } from './props';
import { Container, Title, UserIcon } from './styles';

export const GroupCardComponent: React.FC<GroupCardProps> = ({
  title,
  elements,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <UserIcon />
      <Title {...elements?.titleProps}>{title}</Title>
    </Container>
  );
};
