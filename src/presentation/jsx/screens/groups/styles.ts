import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.RED_DARK};
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 36px;
  color: #fff;
`;
