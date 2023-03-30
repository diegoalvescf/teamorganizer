import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { FilterComponentStyleProps } from './props';

export const Container = styled(TouchableOpacity)<FilterComponentStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green_700};
    `}

  border-radius: ${RFValue(4)}px;
  margin-right: ${({ theme }) => theme.spacing.md.responsive}px;

  height: ${RFValue(38)}px;
  width: ${RFValue(70)}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    color: ${theme.colors.white};
  `}
`;
