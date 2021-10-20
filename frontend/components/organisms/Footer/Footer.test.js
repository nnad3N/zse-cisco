import React from 'react';
import Footer from '@organisms/Footer/Footer';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import footerInfo from '__mocks__/contactInfo';
import footerImages from '__mocks__/images';

const footer = {
  header: 'test header',
  schoolName: 'test school name',
  footerInfo,
  footerImages,
};

describe('Footer', () => {
  it('Renders with provided data', () => {
    renderWithProviders(<Footer footer={footer} />);
    expect(screen.getByText('test header')).toBeInTheDocument();
    expect(screen.getByText('test school name')).toBeInTheDocument();
    expect(screen.getByText('test caption')).toBeInTheDocument();
    expect(screen.getByText('test info')).toBeInTheDocument();
  });

  it('Renders images', () => {
    renderWithProviders(<Footer footer={footer} />);
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('image 2 alternative text')).toBeInTheDocument();
  });
});
