import React from 'react';
import Footer from '@organisms/Footer/Footer';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const footer = {
  header: 'test header',
  schoolName: 'test school name',
  footerInfo: [
    {
      id: 1,
      caption: 'test caption',
      info: 'test info',
    },
  ],
  footerImages: [
    {
      id: 2,
      url: '/',
      alternativeText: 'image alternative text',
      width: 10,
      height: 10,
    },
    {
      id: 3,
      url: '/test',
      alternativeText: 'image 2 alternative text',
      width: 10,
      height: 10,
    },
  ],
};

describe('Footer', () => {
  it('Renders correctly with data', () => {
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
