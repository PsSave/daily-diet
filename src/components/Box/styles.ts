import { ArrowLeft, ArrowUpRight } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type Variants = "primary" | "secondary" | "basic";
export type IconPosition = "left" | "right";

type Props = {
  type?: Variants;
  position?: IconPosition;
};

export const Container = styled.View<Props>`
  height: 107px;
  padding: 16px;

  background-color: ${({ theme, type }) =>
    type === "primary"
      ? theme.COLORS.GREEN_LIGHT
      : type === "secondary"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
  border-radius: 8px;

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

export const ButtonIcon = styled(TouchableOpacity)<Props>`
  ${({ position }) => css`
    position: absolute;
    top: 10px;
    right: ${position === "right" ? 10 : ""}px;
    left: ${position === "left" ? 10 : ""}px;

    justify-content: center;
    align-items: center;
  `}
`;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, type }) => ({
    size: theme.FONT_SIZES.XL,
    color: type === "primary" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const ArrowLeftIcon = styled(ArrowLeft).attrs<Props>(
  ({ theme, type }) => ({
    size: theme.FONT_SIZES.XL,
    color: type === "primary" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
