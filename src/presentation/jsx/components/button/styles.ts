import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ButtonStyleProps, ModeButton } from './props';

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex: 1;

  min-height: ${({ theme }) => theme.sizeIcon.lg.responsive * 2};
  max-height: ${({ theme }) => theme.sizeIcon.lg.responsive * 2};

  background-color: ${({ theme, type }) =>
    type === ModeButton.create
      ? theme.colors.green_700
      : theme.colors.red_dark};

  border-radius: ${RFValue(6)}px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md.responsive}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
