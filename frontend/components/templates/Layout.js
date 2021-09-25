import Nav from '../organisms/Nav/Nav';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';

const Layout = ({ children, navigation }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav navigation={navigation} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
