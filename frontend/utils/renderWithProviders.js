import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'assets/styles/theme';
import AppProvider from 'providers/AppProvider';

export const renderWithProviders = (isDark, children) => {
  const theme = isDark ? darkTheme : lightTheme;

  return render(
    <AppProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppProvider>
  );
};
