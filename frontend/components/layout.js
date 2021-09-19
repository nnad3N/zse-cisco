import Nav from './Nav/Nav';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

const Layout = ({ children, navigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onClick={() => setIsHovered(false)}>
      <ThemeProvider theme={theme}>
        <Nav navigation={navigation} isHovered={isHovered} setIsHovered={setIsHovered} />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
