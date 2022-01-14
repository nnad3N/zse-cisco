import React from 'react';
import NavBar from '@organisms/NavBar/NavBar';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import icon from '__mocks__/icon';

describe('NavBar', () => {
  it('Renders with provided data', () => {
    renderWithProviders(false, <NavBar logo={icon} />);
    expect(screen.getByAltText('icon alternative text')).toBeInTheDocument();
  });
  it('Renders menu buttons', () => {
    renderWithProviders(false, <NavBar logo={icon} />);
    const menuButton = screen.getByLabelText('Menu Toggle Button');
    const darkModeButton = screen.getByLabelText('Dark Mode Toggle Button');
    expect(menuButton).toBeInTheDocument();
    expect(darkModeButton).toBeInTheDocument();
  });
});
