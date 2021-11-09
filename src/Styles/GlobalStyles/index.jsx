import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    }

    :root {

        --font-type-novaround: 'Nova Round';

        --font-size-xsmall: 12px;
        --font-size-small: 14px;
        --font-size-standart: 16px;
        --font-size-medium: 18px;
        --font-size-large: 22px;
        --font-size-xlarge: 26px;

        --font-w-xthin: 200;
        --font-w-thin: 300;
        --font-w-normal: 400;
        --font-w-bold: 600;

    }

`;

export default GlobalStyles;
