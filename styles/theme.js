import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const fonts = {
  ...chakraTheme.fonts,
  body: "arial",
  heading: "arial",
};
const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "62em",
  lg: "64em",
};
const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 700,
};
const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "64px",
};
const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights,
  fontSizes,
};

export const customTheme = extendTheme(overrides);
