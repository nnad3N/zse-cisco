import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 10px;

    ${({ theme }) => theme.mq.mobileLarge} {
        font-size: 9px;
    }

    ${({ theme }) => theme.mq.mobileMedium} {
        font-size: 8px;
    }

    ${({ theme }) => theme.mq.mobileSmall} {
        font-size: 6px;
    }

    ${({ theme }) => theme.mq.desktopTall} {
        font-size: 18px;
    }

}

body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
   
}

a, button {
    font-family: 'Open Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: 600;
    cursor: pointer;

   
}

a {
	text-decoration: none;
}

h1 {
    font-size: ${({ theme }) => theme.fontSize.header};
    font-weight: 700;
}

h2 {
    font-size: ${({ theme }) => theme.fontSize.subHeader};
    font-weight: 400;
}

h3 {
    font-size: ${({ theme }) => theme.fontSize.navHeader};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
}

h4 {
    font-size: ${({ theme }) => theme.fontSize.captionLarge};
    font-weight: 700;

}

h5 {
    font-size: ${({ theme }) => theme.fontSize.captionMedium};
    font-weight: 600;

}

h6 {
    font-size: ${({ theme }) => theme.fontSize.captionSmall};
   
}

p {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: 400;
    text-align: justify;
}

ul {
    text-decoration: none;
}

li {
    a {
        color: white;
        font-size: ${({ theme }) => theme.fontSize.body};

        &:visited {
            color: white;
        }
    }
}

`;
