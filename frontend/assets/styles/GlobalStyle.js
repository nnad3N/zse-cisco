import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Open Sans', sans-serif;
   
}

a, button {
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
}

`;
