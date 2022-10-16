import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    skyBlue: "#55B2D4",
    darkSkyBlue: "#298EB5",
    yellow: "#FFC900",
    scarlet: "#EE3E61",
    red: "#FF0000",
    orange: "#F2A405",
    darkOrange: "#FF6400",
    darkGray: "#666666",
    gray: "#999999",
    default: "#D7DEE2",
    normalGray: "#DDDDDD",
    lightGray: "#D9D9D9",
    white: "#ffffff",
    black: "#000000",
    softGray: "#eeeeee",
    turquoise: "#0F465E",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
