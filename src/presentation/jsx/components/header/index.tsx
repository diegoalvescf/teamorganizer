import logoImg from '@assets/logo.png';
import React from 'react';
import { HeaderProps } from './props';
import {
  BackButton,
  BackIcon,
  Container,
  Logo,
  TouchHomeButton,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { ERouteName } from '@infra/config/routes';

export const HeaderComponent: React.FC<HeaderProps> = ({
  onPress,
  disabled,
  showBackButton = false,
}) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={onPress}>
          <BackIcon />
        </BackButton>
      )}
      <TouchHomeButton
        onPress={() => navigate(ERouteName.GroupsScreen)}
        disabled={disabled}
      >
        <Logo source={logoImg} />
      </TouchHomeButton>
    </Container>
  );
};
