import Header from "@components/Header";
import * as S from "./styles";
import Box from "@components/Box";
import Meals from "@components/Meals";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <Box
        type="primary"
        percent="90,86%"
        description="das refeições dentro da dieta"
        iconPosition="right"
        style={{ width: "100%" }}
        isShowHidden
      />
      <Meals />
    </S.Container>
  );
}
