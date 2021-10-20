import React from 'react';
import ListItem from '@molecules/ListItem/ListItem';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import link from '__mocks__/link';

describe('ListItem', () => {
  it('Renders with provided data', () => {
    renderWithProviders(<ListItem link={link} />);
    expect(screen.getByText('test link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });
});
