import React from 'react';
import ListItem from '@molecules/ListItem/ListItem';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const link = {
  name: 'test link',
  slug: 'link',
  newTab: false,
};

describe('ListItem', () => {
  it('Renders correctly with data', () => {
    renderWithProviders(<ListItem link={link} />);
    expect(screen.getByText('test link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });
});
