import React from 'react';
import Navigation from '@organisms/Navigation/Navigation';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import navLinks from '__mocks__/navLinks';

describe('Navigation', () => {
  it('Renders with provided data', () => {
    renderWithProviders(false, <Navigation navLinks={navLinks} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
    expect(screen.getByText('link')).toBeInTheDocument();
    expect(screen.getByText('link 2')).toBeInTheDocument();
  });
});
