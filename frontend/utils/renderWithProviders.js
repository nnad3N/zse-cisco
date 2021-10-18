import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import AppProvider from 'providers/AppProvider';

export const renderWithProviders = (children) => {
  return render(
    <AppProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppProvider>
  );
};
