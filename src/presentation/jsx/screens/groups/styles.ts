import { ButtonComponent } from '@components/button';
import { ModeButton } from '@components/button/props';
import { GroupCardComponent } from '@components/group-card';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { IGroup } from './props';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: ${({ theme }) => theme.spacing.lg.responsive}px;
`;

export const Header = styled(HeaderComponent)``;

export const HighlightGroups = styled(HighlightComponent)``;

export const GroupsList = styled(FlatList as new () => FlatList<IGroup>).attrs({
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const GroupCard = styled(GroupCardComponent)``;

export const HighlightFeedback = styled(HighlightComponent).attrs(
  ({ theme }) => ({
    elements: {
      containerProps: {
        style: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      titleProps: {
        style: {
          fontSize: theme.typography.fontSize.md.responsive,
          marginBottom: theme.spacing.md.responsive,
          color: theme.colors.gray_300,
        },
      },
    },
  })
)``;

export const CreateButton = styled(ButtonComponent).attrs({
  type: ModeButton.create,
})``;
