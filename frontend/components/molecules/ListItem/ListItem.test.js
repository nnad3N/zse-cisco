/**
 * @jest-environment jsdom
 */

import React from 'react';
import ListItem from '@molecules/ListItem/ListItem';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const link = {
  name: 'test link',
  slug: 'link',
  newTab: false,
};

const listIcon = {
  url: '/',
  alternativeText: 'list icon alternative text',
  width: 10,
  height: 10,
};

describe('ListItem', () => {
  it('Renders correctly with data', () => {
    renderWithProviders(<ListItem link={link} listIcon={listIcon} />);
    expect(screen.getByText('test link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
    expect(screen.getByAltText('list icon alternative text')).toBeInTheDocument();
  });
});
