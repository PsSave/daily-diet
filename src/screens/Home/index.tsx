import Header from "@components/Header";
import * as S from "./styles";
import Box from "@components/Box";
import Meals from "@components/Meals";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <Box type="primary" isShowHidden />
      <Meals />
    </S.Container>
  );
}
