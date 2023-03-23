import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_500};
    padding: ${theme.spacing.lg.responsive}px;
    margin-bottom: ${theme.spacing.md.responsive}px;
  `}
  width: 100%;
  height: ${RFValue(90)}px;

  border-radius: ${RFValue(6)}px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.md.responsive}px;
    color: ${theme.colors.gray_200};
    font-family: ${theme.fonts.regular};
  `}
`;

export const UserIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: theme.sizeIcon.xl.responsive,
  color: theme.colors.green_700,
  weight: 'fill',
}))`
  margin-right: ${({ theme }) => theme.spacing.xxm.responsive}px;
`;
