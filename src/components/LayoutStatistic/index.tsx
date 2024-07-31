import Box from "@components/Box";
import * as S from "./styles";

export default function LayoutStatistic() {
  return (
    <S.Container type="primary">
      <S.Header>
        <Box
          type="primary"
          percent="90,86%"
          description="das refeições dentro da dieta"
          iconPosition="left"
          isShowHidden
          style={{ width: "100%" }}
        ></Box>
      </S.Header>
      <S.Content>
        <S.Title>Estatísticas gerais </S.Title>
        <Box
          type="basic"
          percent="22"
          description="melhor sequência de pratos dentro da dieta"
          style={{ width: "100%" }}
        ></Box>
        <Box
          type="basic"
          percent="109"
          description="refeições registradas"
          style={{ width: "100%" }}
        ></Box>
        <S.Info>
          <Box
            type="primary"
            percent="99"
            description="refeições dentro da dieta"
            style={{ width: "48%" }}
          ></Box>
          <Box
            type="secondary"
            percent="10"
            description="refeições fora da dieta"
            style={{ width: "48%" }}
          ></Box>
        </S.Info>
      </S.Content>
    </S.Container>
  );
}
