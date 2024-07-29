import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type: S.Variants;
  icon?: React.ReactNode;
};

export default function Button({ title, type, icon, ...rest }: ButtonProps) {
  return (
    <S.Button activeOpacity={0.9} type={type} {...rest}>
      {icon && icon}
      <S.Text type={type}>{title}</S.Text>
    </S.Button>
  );
}
