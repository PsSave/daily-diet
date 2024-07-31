import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type MealProps = {
  hour: string;
  title: string;
  status?: S.status;
};

export default function Meal({ hour, title, status = true }: MealProps) {
  console.log(hour, title, status);
  return (
    <S.Container activeOpacity={0.7}>
      <S.Hour>{hour}</S.Hour>
      <S.Divider />
      <S.Title numberOfLines={1}>{title}</S.Title>
      <S.Status status={status} />
    </S.Container>
  );
}
