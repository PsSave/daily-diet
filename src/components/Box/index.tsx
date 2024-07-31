import React from "react";
import * as S from "./styles";
import { ViewProps } from "react-native";

type BoxProps = ViewProps & {
  type: S.Variants;
  percent: string;
  description: string;
  iconPosition?: S.IconPosition;
  isShowHidden?: boolean;
};

export default function Box({
  type,
  percent,
  description,
  iconPosition = "right",
  isShowHidden = false,
  ...rest
}: BoxProps) {
  return (
    <S.Container type={type} {...rest}>
      {isShowHidden && (
        <S.ButtonIcon position={iconPosition} activeOpacity={0.7}>
          {iconPosition === "left" ? (
            <S.ArrowLeftIcon type={type} />
          ) : (
            <S.ArrowUpRightIcon type={type} />
          )}
        </S.ButtonIcon>
      )}
      <S.Percent>{percent}</S.Percent>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
