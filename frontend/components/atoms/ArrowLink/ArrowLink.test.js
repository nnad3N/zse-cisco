import React from 'react';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import image from '__mocks__/image';

describe('ArrowLink', () => {
  it('Renders the title', () => {
    renderWithProviders(<ArrowLink title="arrow" />);
    expect(screen.getByText('arrow')).toBeInTheDocument();
  });

  it('Renders the link', () => {
    renderWithProviders(<ArrowLink slug="link" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });

  it('Renders the image', () => {
    renderWithProviders(<ArrowLink image={image} />);
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
