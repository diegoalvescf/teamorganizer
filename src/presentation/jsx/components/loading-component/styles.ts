import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
})`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray_700};
`;
