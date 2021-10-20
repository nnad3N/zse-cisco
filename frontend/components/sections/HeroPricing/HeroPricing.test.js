import React from 'react';
import HeroPricing from '@sections/HeroPricing/HeroPricing';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import button from '__mocks__/button';

const data = {
  title: 'test title',
  description: 'test description',
  button,
};

describe('HeroPricing', () => {
  it('Renders with data', () => {
    renderWithProviders(<HeroPricing data={data} />);
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByText('button')).toBeInTheDocument();
  });
});
