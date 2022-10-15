import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      skyBlue: "#55B2D4";
      yellow: "#FFC900";
      scarlet: "#EE3E61";
      red: "##FF0000";
      darkGray: "#666666";
      gray: "#999999";
      default: "#D7DEE2";
      normalGray: "#DDDDDD";
      lightGray: "#D9D9D9";
    };
    boxShadow: {
      normal: "0 3px 8px 0 rgb(0 0 0 / 10%)";
      purple: "0 3px 8px 0 #d6c9ff";
      blue: "0 3px 8px 0 #b3e2e6";
    };
  }
}
