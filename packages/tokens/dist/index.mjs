// src/colors/primary.ts
var primaryPalette = {
  "primary-green": {
    50: "#e6efeb",
    100: "#b0cec1",
    200: "#8ab7a3",
    300: "#549679",
    400: "#33815f",
    500: "#006237",
    600: "#005932",
    700: "#004627",
    800: "#00361e",
    900: "#002917"
  },
  "primary-purple": {
    50: "#F1EBFF",
    100: "#E3D7FE",
    200: "#C7AFFD",
    300: "#AB87FC",
    400: "#8F5FFB",
    500: "#8A2BE2",
    600: "#6A22CB",
    700: "#5A1EB2",
    800: "#4A1A99",
    900: "#3A167F"
  },
  "primary-black": {
    50: "#e6e6e6",
    100: "#b0b0b0",
    200: "#8a8a8a",
    300: "#545454",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
  },
  "primary-grey": {
    50: "#e9e9e9",
    100: "#b9b9b9",
    200: "#989898",
    300: "#686868",
    400: "#4b4b4b",
    500: "#1e1e1e",
    600: "#1b1b1b",
    700: "#151515",
    800: "#111111",
    900: "#0d0d0d"
  },
  error: {
    50: "#feeceb",
    100: "#fac5c1",
    200: "#f8a9a3",
    300: "#f5827a",
    400: "#f36960",
    500: "#f04438",
    600: "#da3e33",
    700: "#aa3028",
    800: "#84251f",
    900: "#651d18"
  },
  warning: {
    50: "#fef4e6",
    100: "#fdddb3",
    200: "#fbcc8e",
    300: "#fab55a",
    400: "#f9a63a",
    500: "#f79009",
    600: "#e18308",
    700: "#af6606",
    800: "#884f05",
    900: "#683c04"
  },
  success: {
    50: "#e7f8f0",
    100: "#b6e9d1",
    200: "#92deba",
    300: "#60cf9b",
    400: "#41c588",
    500: "#12b76a",
    600: "#10a760",
    700: "#0d824b",
    800: "#0a653a",
    900: "#084d2d"
  },
  neutral: {
    0: "#ffffff",
    10: "#fbfbfb",
    20: "#f6f6f6",
    30: "#eeeeee",
    40: "#e3e3e3",
    50: "#cacaca",
    60: "#bdbdbd",
    70: "#b2b2b2",
    80: "#a5a5a5",
    90: "#989898",
    100: "#8b8b8b",
    200: "#7f7f7f",
    300: "#727272",
    400: "#676767",
    500: "#5a5a5a",
    600: "#505050",
    700: "#414141",
    800: "#343434",
    900: "#292929"
  }
};

// src/colors.ts
var colors = {
  ...primaryPalette,
  secondary: { 500: "#FF6B81" },
  tertiary: { 500: "#1E90FF" },
  accent: { 500: "#008080" },
  highlight: { 500: "#FFC0CB" },
  detail: { 500: "#AFEEEE" }
};

// src/space.ts
var space = {
  1: "0.25rem",
  // 4px
  2: "0.5rem",
  // 8px
  3: "0.75rem",
  // 12px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  8: "2rem",
  // 32px
  10: "2.5rem",
  // 40px
  12: "3rem",
  // 48px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem",
  // 96px
  32: "8rem",
  // 128px
  40: "10rem",
  // 160px
  48: "12rem",
  // 192px
  56: "14rem",
  // 224px
  64: "16rem"
  // 256px
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace",
  "sf-digital": "Lato, sans-serif"
};

// src/font-sizes.ts
var fontSizes = {
  // TODO: should we keept these or remove them?
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem",
  "sf-xs": "0.8125rem",
  "sf-sm": "0.875rem",
  "sf-md": "1rem",
  "sf-lg": "1.125rem",
  "sf-h1": "2.25rem",
  "sf-h2": "2rem",
  "sf-h3": "1.8125rem",
  "sf-h4": "1.625rem",
  "sf-h5": "1.4375rem",
  "sf-h6": "1.25rem"
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/border-width.ts
var borderWidth = {
  6: "6px",
  10: "10px"
};

// src/drop-shadow.ts
var dropShadow = {
  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
  sm: ["0 1px 3px rgba(16,24,40,0.10)", "0 1px 2px rgba(16,24,40,0.06)"],
  md: [
    "0 4px 8px -2px rgba(16, 24, 40, 0.10)",
    "0 2px 4px -2px rgba(16, 24, 40, 0.06)"
  ],
  lg: [
    "0 12px 16px -4px rgba(16, 24, 40, 0.08)",
    "0 4px 6px -2px rgba(16, 24, 40, 0.03)"
  ],
  xl: [
    "0 20px 24px -4px rgba(16, 24, 40, 0.08)",
    "0 8px 8px -4px rgba(16, 24, 40, 0.03)"
  ],
  "2xl": "0 24px 48px -12px rgba(16, 24, 40, 0.18)",
  "3xl": "0 32px 64px -12px rgba(16, 24, 40, 0.14)"
};

// src/blur.ts
var blur = {
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px"
};
export {
  blur,
  borderWidth,
  colors,
  dropShadow,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
};
