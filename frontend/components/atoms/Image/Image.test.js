/**
 * @jest-environment jsdom
 */

import React from 'react';
import Image from '@atoms/Image/Image';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const image = {
  url: '/uploads/test.png',
  alternativeText: 'image alternative text',
  width: 10,
  height: 10,
};

describe('Image', () => {
  it('Renders correctly with alternative text', () => {
    renderWithProviders(<Image image={image} />);
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });

  it('Has src attribute', () => {
    renderWithProviders(<Image image={image} />);
    expect(screen.getByAltText('image alternative text')).toHaveAttribute('src');
  });
});
