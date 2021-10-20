import React from 'react';
import Hero from '@sections/Hero/Hero';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import buttons from '__mocks__/buttons';
import image from '__mocks__/image';

const data = {
  title: 'test title',
  description: 'test description',
  buttons,
  image,
};

describe('Hero', () => {
  it('Renders with data', () => {
    renderWithProviders(<Hero data={data} />);
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByText('button')).toBeInTheDocument();
    expect(screen.getByText('button 2')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
