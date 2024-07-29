import * as S from "./styles";

type BoxProps = {
  isShowHidden?: boolean;
  type: S.Variants;
};

export default function Box({ type, isShowHidden = false }: BoxProps) {
  return (
    <S.Container type={type}>
      {isShowHidden && (
        <S.ButtonIcon activeOpacity={0.7}>
          <S.Icon type={type} />
        </S.ButtonIcon>
      )}
      <S.Percent>90,86%</S.Percent>
      <S.Description>das refeições dentro da dieta</S.Description>
    </S.Container>
  );
}
