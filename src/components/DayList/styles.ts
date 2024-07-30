import { SectionList } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: start;
  align-items: center;
`;

export const Day = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    text-align: start;
    margin-top: 24px;
    margin-bottom: 8px;
  `}
`;
