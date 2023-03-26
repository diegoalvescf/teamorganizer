import { ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
})`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray_700};
  `}
  flex: 1;
`;
