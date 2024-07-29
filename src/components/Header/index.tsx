import * as S from "./styles";
import Logo from "@assets/Logo.png";
import Profile from "@assets/Profile.jpeg";

export default function Header() {
  return (
    <S.Container>
      <S.Logo source={Logo} />
      <S.Profile source={Profile} />
    </S.Container>
  );
}
