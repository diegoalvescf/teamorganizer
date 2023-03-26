import { ButtonComponent } from '@components/button';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { InputComponent } from '@components/input';
import { UsersThree } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_600};
    padding: ${theme.spacing.lg.responsive}px;
  `}
  flex: 1;
`;

export const Header = styled(HeaderComponent)``;

export const Content = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const UserIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: theme.sizeIcon.xxl.responsive,
  color: theme.colors.green_700,
}))``;

export const NewGroupCard = styled(HighlightComponent)``;

export const CreateButton = styled(ButtonComponent)`
  margin-top: ${({ theme }) => theme.spacing.xm.responsive}px;
`;

export const Input = styled(InputComponent)``;
