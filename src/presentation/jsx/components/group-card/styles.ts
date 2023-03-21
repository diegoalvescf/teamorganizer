import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(90)}px;

  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: ${RFValue(6)}px;

  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg.responsive}px;
  margin-bottom: ${({ theme }) => theme.spacing.md.responsive}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md.responsive}px;
  color: ${({ theme }) => theme.colors.gray_200};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: theme.sizeIcon.xl.responsive,
  color: theme.colors.green_700,
  weight: 'fill',
}))`
  margin-right: ${({ theme }) => theme.spacing.xxm.responsive}px;
`;
