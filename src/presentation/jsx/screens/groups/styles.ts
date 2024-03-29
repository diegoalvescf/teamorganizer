import { ButtonComponent } from '@components/button';
import { ModeButton } from '@components/button/props';
import { GroupCardComponent } from '@components/group-card';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { IGroup } from '@domain/models/IGroup';
import { FlatList } from 'react-native';
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
