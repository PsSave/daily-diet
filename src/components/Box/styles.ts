import { ArrowUpRight } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type Variants = "primary" | "secondary";

type Props = {
  type: Variants;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 107px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  margin-top: 33px;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`;

export const ButtonIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: theme.FONT_SIZES.XL,
  color: type === "primary" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
