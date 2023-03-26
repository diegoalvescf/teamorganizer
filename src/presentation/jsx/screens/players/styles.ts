import { ButtonIconComponent } from '@components/button-icon';
import { ETypeButtonIcon } from '@components/button-icon/props';
import { FilterComponent } from '@components/filter';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { InputComponent } from '@components/input';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_600};
  `}

  flex: 1;

  padding: ${({ theme }) => theme.spacing.xm.responsive}px;
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

export const ClassFilter = styled(FilterComponent)``;
