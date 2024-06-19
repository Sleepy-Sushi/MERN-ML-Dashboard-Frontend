// @ts-ignore: TS6192
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
