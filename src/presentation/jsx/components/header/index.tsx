import logoImg from '@assets/logo.png';
import React from 'react';
import { HeaderProps } from './props';
import { BackButton, BackIcon, Container, Logo } from './styles';

export const HeaderComponent: React.FC<HeaderProps> = ({
  showBackButton = false,
}) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};
