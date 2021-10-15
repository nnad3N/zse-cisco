/**
 * @jest-environment jsdom
 */

import React from 'react';
import Button from '@atoms/Button/Button';
import { theme } from 'assets/styles/theme';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const data = {
  caption: 'button',
  link: {
    slug: 'link',
  },
  isFilled: true,
};

describe('Button', () => {
  it('Renders correctly with caption', () => {
    renderWithProviders(<Button data={data} />);
    expect(screen.getByText('button')).toBeInTheDocument();
  });

  it('Renders correctly with link', () => {
    renderWithProviders(<Button data={data} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });

  it('Renders correct variant', () => {
    renderWithProviders(<Button data={data} />);
    const button = screen.getByRole('link');
    expect(button).not.toHaveStyle('background-color: transparent');
  });

  it('Renders correct style', () => {
    renderWithProviders(<Button accent={true} />);
    const button = screen.getByRole('link');
    expect(button).toHaveStyle(`border-color: ${theme.colors.accentColor}`);
  });

  it('Has margin', () => {
    renderWithProviders(<Button hasMargin={true} />);
    const button = screen.getByRole('link');
    expect(button).toHaveStyle('margin-right: 2rem');
  });
});
