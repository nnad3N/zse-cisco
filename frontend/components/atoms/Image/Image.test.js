import React from 'react';
import Image from '@atoms/Image/Image';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import image from '__mocks__/image';

describe('Image', () => {
  it('Renders correctly with alternative text', () => {
    renderWithProviders(false, <Image image={image.data.attributes} />);
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });

  it('Has an src attribute', () => {
    renderWithProviders(false, <Image image={image.data.attributes} />);
    expect(screen.getByAltText('image alternative text')).toHaveAttribute('src');
  });
});
