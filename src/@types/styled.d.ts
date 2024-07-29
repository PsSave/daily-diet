import "styled-components/native";

import theme from "@theme/index"; // importa o tema

declare module "styled-components/native" {
  // declaração de modulo
  type ThemeType = typeof theme; // cria uma tipagem do conteudo do theme

  export interface DefaultTheme extends ThemeType {} // declarar qual o conteudo do tema
}
