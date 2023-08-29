/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  createTheme,
  ThemeOptions,
  PaletteOptions,
  Breakpoints,
} from "@mui/material/styles";
import { colors, Colors } from "./colors";

export * from "./colors";

const defaultTheme = createTheme();

export interface CustomPaletteOptions
  extends Omit<
      PaletteOptions,
      "primary" | "secondary" | "success" | "warning" | "error"
    >,
    Colors {}
enum TypographyKey {
  display48 = "display48",
  title20 = "title20",
  subTitle18 = "subTitle18",
  body16 = "body16",
  body15 = "body15",
  body14 = "body14",
  body13 = "body13",
  caption12 = "caption12",
  caption10 = "caption10",
}

type TypographyProperty = {
  fontFamily: string;
  fontStyle: string;
  fontWeight: number;
  fontSize: number;
};

export type CustomTypographyOptions = Pick<ThemeOptions, "typography"> & {
  [key in TypographyKey]: TypographyProperty;
} & {
  fontFamily: string;
};
export interface CustomThemeOptions
  extends Omit<ThemeOptions, "palette" | "typography"> {
  palette?: Partial<CustomPaletteOptions>;
  typography?: CustomTypographyOptions;
  breakpoints?: CustomBreakpointsOptions;
}

interface CustomBreakpointsValues {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  mobile: number;
  tablet: number;
  laptop: number;
}

export interface CustomBreakpointsOptions extends Omit<Breakpoints, "values"> {
  values: CustomBreakpointsValues;
}

declare module "@mui/material/styles" {
  interface Theme {
    palette: CustomPaletteOptions;
    typography: CustomTypographyOptions;
    breakpoints: CustomBreakpointsOptions;
  }
  interface ThemeOption extends CustomThemeOptions {}
}

const customPalette: CustomPaletteOptions = {
  ...defaultTheme.palette,
  ...colors,
};

const fontFamily = [
  "Spoqa Han Sans Neo",
  "Pretendard",
  "Poppins",
  "-apple-system",
  "sans-serif",
].join(", ");
const customTypography: CustomTypographyOptions = {
  fontFamily,
  display48: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 48,
  },
  title20: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 20,
  },
  subTitle18: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 18,
  },
  body16: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
  },
  body15: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 15,
  },
  body14: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
  },
  body13: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
  },
  caption12: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
  },
  caption10: {
    fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
  },
};
const customBreakpoints: Pick<CustomBreakpointsOptions, "values"> = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    mobile: 0,
    tablet: 768,
    laptop: 1280,
  },
};

export const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: "auto",
          scrollbarWidth: "none",
        },
        "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
          {
            WebkitBoxShadow: "0 0 0 500px white inset !important",
          },
        "::-webkit-scrollbar": {
          width: 2,
          height: 0,
        },
        "::-webkit-scrollbar-button": {
          background: "#ccc",
        },
        "::-webkit-scrollbar-track-piece": {
          background: "#888",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#eee",
        },
      },
    },
  },
  palette: customPalette,
  typography: { ...customTypography, htmlFontSize: 16 },
  breakpoints: {
    ...customBreakpoints,
  },
};

export const theme = createTheme(themeOptions);
