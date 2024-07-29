import Button from "@components/Button";
import * as S from "./styles";
import { Plus } from "lucide-react-native";
import theme from "@theme/index";

export default function Meals() {
  return (
    <S.Container>
      <S.Text>Refeições</S.Text>
      <Button
        title="Nova refeição"
        type="solid"
        icon={<Plus size={18} color={theme.COLORS.WHITE} />}
        onPress={() => {
          console.log("Nova refeição");
        }}
      />
    </S.Container>
  );
}
