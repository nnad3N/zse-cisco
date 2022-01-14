import React from 'react';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import { lightTheme } from 'assets/styles/theme';

describe('ArrowLink', () => {
  it('Renders the text', () => {
    renderWithProviders(false, <ArrowLink text="arrow" />);
    expect(screen.getByText('arrow')).toBeInTheDocument();
  });

  it('Renders the link', () => {
    renderWithProviders(false, <ArrowLink url="/link" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });

  it('Renders the accented version', () => {
    renderWithProviders(false, <ArrowLink text="arrow" accented={true} />);
    const arrow = screen.getByText('arrow');
    expect(arrow).toHaveStyle(`color: ${lightTheme.colors.accentColor}`);
  });
});
