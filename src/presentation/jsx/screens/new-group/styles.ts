import { ButtonComponent } from '@components/button';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { UsersThree } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: ${({ theme }) => theme.spacing.lg.responsive}px;
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

export const CreateButton = styled(ButtonComponent)``;
