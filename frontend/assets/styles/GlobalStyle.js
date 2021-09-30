import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
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
	color: ${({ theme }) => theme.colors.black};
	text-decoration: none;

	&:visited {
		color: ${({ theme }) => theme.colors.black};
	}
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
    font-size: ${({ theme, small }) => (small ? theme.fontSize.bodySmall : theme.fontSize.body)};
    font-weight: 400;
    text-align: justify;
}

ul {
    text-decoration: none;
}

li {
    font-size: ${({ theme, nav }) => (nav ? theme.fontSize.navList : theme.fontSize.body)};
}

`;
