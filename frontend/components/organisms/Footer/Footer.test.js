import React from 'react';
import Footer from '@organisms/Footer/Footer';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import footer from '__mocks__/footer';

describe('Footer', () => {
  it('Renders with provided data', () => {
    renderWithProviders(false, <Footer footer={footer} />);
    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('school name')).toBeInTheDocument();
    expect(screen.getByText('caption')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('Renders images', () => {
    renderWithProviders(false, <Footer footer={footer} />);
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('image 2 alternative text')).toBeInTheDocument();
  });
});
