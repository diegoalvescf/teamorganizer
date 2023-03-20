import React from 'react';
import { Container, BackIcon, Logo, BackButton } from './styles';
import { HeaderProps } from './props';
import logoImg from '@assets/logo.png';

export const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
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
