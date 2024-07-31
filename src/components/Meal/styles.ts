import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type status = true | false;

type Props = {
  status: status;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;

  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-left: 16px;
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.FONT_SIZES.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    margin-right: 12px;
  `}
`;

export const Status = styled.View<Props>`
  ${({ theme, status }) => css`
    width: 14px;
    height: 14px;
    border-radius: 25px;
    background-color: ${status ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    margin-left: auto;
    margin-right: 16px;
  `}
`;
