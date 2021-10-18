import React from 'react';
import NavBar from '@organisms/NavBar/NavBar';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const logo = {
  url: '/',
  alternativeText: 'logo alternative text',
  width: 10,
  height: 10,
};

describe('NavBar', () => {
  it('Renders correctly with data', () => {
    renderWithProviders(<NavBar logo={logo} />);
    expect(screen.getByAltText('logo alternative text')).toBeInTheDocument();
  });
  it('Renders menu button', () => {
    renderWithProviders(<NavBar />);
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });
});
