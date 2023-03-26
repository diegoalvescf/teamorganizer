import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ButtonIconStyleProps, ETypeButtonIcon } from './props';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  width: ${({ theme }) => theme.sizeIcon.xxl.responsive}px;
  height: ${({ theme }) => theme.sizeIcon.xxl.responsive}px;

  justify-content: center;
  align-items: center;

  margin-left: ${({ theme }) => theme.spacing.md.responsive}px;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(
  ({ theme, type }) => ({
    size: theme.sizeIcon.xxm.responsive,
    color:
      type === ETypeButtonIcon.primary
        ? theme.colors.green_700
        : theme.colors.red,
  })
)``;
