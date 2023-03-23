import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl.responsive}px 0;
`;

export const Title = styled.Text`
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeight.xxm.responsive}px;
  font-size: ${({ theme }) => theme.typography.fontSize.lg.responsive}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xm.responsive}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.md.responsive}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_300};
`;
