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

        --white-primary: #f5f5f5;
        --black-primary:#0f0f0f; 

        --gray-100: #E0E0E0;
        --gray-300: #271d1d;
        --gray-600: #333333;

        --pink-primary: #D9CCCF;
        --gray-primary: #504A59;
        --brown-secondary: #732F16;
        --brown-terciary: #401309;
        --brown-light: #A65341;

        --alert-success: #61db61;
        --alert-error: #df6752;

        //First Palette
        --gray-light:#D9CCCF; 
        --gray-medium:#504A59; 
        --brown-xlight:#A65341; 
        --brown-light:#AA6655;
        --brown-medium:#732F16; 
        --brown-dark:#401309; 
        
        //Second Palette
        --caramel-xlight:#F2D5C4;
        --caramel-light:#D9B79A;
        --caramel-medium:#A68160;
        --caramel-dark:#73563D;
        --caramel-xdark:#212621;
    }

    body {
        font-family: 'Nova Round', cursive;
        background: var(--EletromagneticColor);
    }
    
    body, input, button {
        font-family: 'Nova Round', cursive;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Nova Round', cursive;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: #fff;
    }

`;

export default GlobalStyles;
