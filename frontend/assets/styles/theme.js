const light = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    backgroundLight: '#FFFFFF',
    backgroundWhite: '#FFFFFF',
    backgroundColor: '#E8EBF1',
    mainColor: '#0E274D',
    accentColor: '#00BCEA',
    lighterAccentColor: '#00cdff',
    buttonColor: '#0E274D',
    buttonTextColor: '#FFFFFF',
    lighterButtonColor: '#103369',
  },
};

const dark = {
  colors: {
    white: '#e6e6e6',
    black: '#e6e6e6',
    backgroundLight: '#1c1d1f',
    backgroundWhite: '#131314',
    backgroundColor: '#131314',
    mainColor: '#0E274D',
    accentColor: '#00BCEA',
    lighterAccentColor: '#00cdff',
    buttonColor: '#00BCEA',
    buttonTextColor: '#0E274D',
    lighterButtonColor: '#00cdff',
  },
};

const defaultTheme = {
  fontSize: {
    header: '4.8rem',
    headerMobile: '4rem',
    navHeader: '3.6rem',
    navList: '1.8rem',
    subHeader: '2rem',
    subText: '1.8rem',
    captionLarge: '3rem',
    captionLargeMedium: '2.4rem',
    captionMedium: '1.3rem',
    captionSmall: '1.2rem',
    body: '1.6rem',
    bodySmall: '1.4rem',
  },
  padding: {
    xl: '18vw',
    x: '15vw',
    m: '10vw',
    xs: '8vw',
    s: '5vw',

    xxlV: '10rem',
    xlV: '8rem',
    xV: '7rem',
    mV: '5rem',
    xsV: '4rem',
    sV: '3rem',
    ssV: '2rem',
  },
  dimensions: {
    tilePadding: '4rem 3.5rem',
    tilePaddingMobile: '3rem 5vw',
    tileWidth: '65rem',
    pageSectionPadding: '4rem 5rem',
    pageSectionWidth: '100rem',
    richTextMarginTop: '4rem',
  },
  utils: {
    borderRadius: '6px',
    boxShadow: '0px 4px 14px  rgba(0, 0, 0, 0.1)',
  },
  mq: {
    heroInstructors: `@media (min-width: 1570px)`,
    desktop: `@media (max-width: 1550px)`,
    desktopTall: `@media (min-height: 1100px) and (min-width: 1000px) and (max-width: 1400px)`,
    desktopWide: `@media (min-width: 1400px)`,
    laptopLarge: `@media (max-width: 1450px)`,
    laptop: `@media (max-width: 1224px)`,
    tabletLarge: `@media (max-width: 1050px)`,
    tablet: `@media (max-width: 850px)`,
    mobileLarge: `@media (max-width: 568px)`,
    mobileMedium: `@media (max-width: 450px)`,
    mobileSmall: `@media (max-width: 350px)`,
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
