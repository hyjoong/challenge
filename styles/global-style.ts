import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset} 
    html{ 
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback; 
        -ms-overflow-style: none;
        scrollbar-width: none;
        width: calc(100% - 33px);
        min-height: calc(100vh - 21px);
        padding: 21px 0 0 33px;
        background-image: url(./image/background.png);
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer; 
    } 
`;
