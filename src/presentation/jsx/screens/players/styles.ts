import { ButtonComponent } from '@components/button';
import { ButtonIconComponent } from '@components/button-icon';
import { ETypeButtonIcon } from '@components/button-icon/props';
import { ModeButton } from '@components/button/props';
import { FilterComponent } from '@components/filter';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { InputComponent } from '@components/input';
import { PlayerCardComponent } from '@components/players-card';
import { IClassName } from '@domain/models/IClassName';
import { IPlayer } from '@domain/models/IPayers';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_600};
    padding: ${theme.spacing.xm.responsive}px;
  `}
  flex: 1;
`;

export const Header = styled(HeaderComponent)``;

export const ClassNameCard = styled(HighlightComponent)``;

export const Section = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_700};

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(6)}px;
`;

export const Input = styled(InputComponent)``;

export const ButtonAdd = styled(ButtonIconComponent).attrs({
  type: ETypeButtonIcon.primary,
})``;

export const ClassFilterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${({ theme }) => theme.spacing.xl.responsive}px 0
    ${({ theme }) => theme.spacing.md.responsive}px;
`;

export const ClassFilter = styled(FilterComponent)``;

export const AmountOfPlayersText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.white};
  `}
`;

export const ClassFilterList = styled(
  FlatList as new () => FlatList<IClassName>
).attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`` as unknown as typeof FlatList;

export const PlayersList = styled(
  FlatList as new () => FlatList<IPlayer>
).attrs({
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const PlayerItem = styled(PlayerCardComponent)``;

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

export const DeleteButton = styled(ButtonComponent).attrs({
  type: ModeButton.delete,
})``;
