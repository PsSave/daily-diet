import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type Variants = "primary" | "secondary";

type Props = {
  type: Variants;
};

export const Container = styled(SafeAreaView)<Props>`
  ${({ theme, type }) => css`
    flex: 1;
    background-color: ${type === "primary"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: start;
  align-items: center;
  padding: 24px;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 23px;
    margin-top: 6px;
  `}
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
