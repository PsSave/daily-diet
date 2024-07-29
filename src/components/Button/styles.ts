import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type Variants = "solid" | "outline";

type Props = {
  type: Variants;
};

export const Button = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    width: 100%;
    height: 50px;
    background-color: ${type === "solid" ? theme.COLORS.GRAY_2 : "transparent"};
    border: 1px solid ${theme.COLORS.GRAY_2};
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `}
`;

export const Text = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "solid" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;
