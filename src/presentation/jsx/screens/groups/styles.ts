import { GroupCardComponent } from '@components/group-card';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: ${({ theme }) => theme.spacing.lg.responsive}px;
`;

export const Header = styled(HeaderComponent)``;

export const Highlight = styled(HighlightComponent)``;

export const GroupCard = styled(GroupCardComponent)``;
