import React from 'react';
import NavBar from '@organisms/NavBar/NavBar';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import icon from '__mocks__/icon';

describe('NavBar', () => {
  it('Renders with provided data', () => {
    renderWithProviders(<NavBar logo={icon} />);
    expect(screen.getByAltText('icon alternative text')).toBeInTheDocument();
  });
  it('Renders menu button', () => {
    renderWithProviders(<NavBar />);
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });
});
