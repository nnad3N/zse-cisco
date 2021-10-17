/**
 * @jest-environment jsdom
 */

import React from 'react';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const image = {
  url: '/',
  alternativeText: 'arrow alternative text',
  width: 10,
  height: 10,
};

describe('ArrowLink', () => {
  it('Renders correctly with title', () => {
    renderWithProviders(<ArrowLink title="arrow" />);
    expect(screen.getByText('arrow')).toBeInTheDocument();
  });

  it('Renders correctly with link', () => {
    renderWithProviders(<ArrowLink slug="link" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });

  it('Renders correctly with image', () => {
    renderWithProviders(<ArrowLink image={image} />);
    expect(screen.getByAltText('arrow alternative text')).toBeInTheDocument();
  });
});
