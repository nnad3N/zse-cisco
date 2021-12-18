import React from 'react';
import HeroAcademy from '@sections/HeroAcademy/HeroAbout';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import button from '__mocks__/button';
import image from '__mocks__/image';

const data = {
  title: 'test title',
  description: 'test description',
  button,
  image,
};

describe('HeroAcademy', () => {
  it('Renders with data', () => {
    renderWithProviders(<HeroAcademy data={data} />);
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByText('button')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
