import logoImg from '@assets/logo.png';
import React from 'react';
import { HeaderProps } from './props';
import { BackButton, BackIcon, Container, Logo } from './styles';

export const HeaderComponent: React.FC<HeaderProps> = ({
  onPress,
  showBackButton = false,
}) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={onPress}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};
