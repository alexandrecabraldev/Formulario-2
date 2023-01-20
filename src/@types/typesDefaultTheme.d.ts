import { DefaultTheme } from "../DefaultTheme";

type CustomTheme = typeof DefaultTheme;

declare module "styled-components"{
    export interface DefaultTheme extends CustomTheme{}
}