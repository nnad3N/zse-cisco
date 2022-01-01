import React from 'react';
import ListItem from '@molecules/ListItem/ListItem';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import link from '__mocks__/link';

describe('ListItem', () => {
  it('Renders with link', () => {
    renderWithProviders(false, <ListItem link={link} hasLinks={true} />);
    expect(screen.getByText('link text')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });
  it('Renders with children', () => {
    renderWithProviders(
      false,
      <ListItem link={link}>
        <h1>test</h1>
      </ListItem>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
