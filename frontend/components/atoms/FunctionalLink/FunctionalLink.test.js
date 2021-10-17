/**
 * @jest-environment jsdom
 */

import React from 'react';
import FunctionalLink from '@atoms/FunctionalLink/FunctionalLink';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const link = {
  name: 'test link',
  slug: 'link',
  newTab: false,
};

const externalLink = {
  name: 'test link',
  slug: 'link',
  newTab: true,
};

describe('FunctionalLink', () => {
  it('Renders correctly with name', () => {
    renderWithProviders(<FunctionalLink link={link} />);
    expect(screen.getByText('test link')).toBeInTheDocument();
  });

  it('Renders correctly with link', () => {
    renderWithProviders(<FunctionalLink link={link} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });

  it('Renders correctly with external link', () => {
    renderWithProviders(<FunctionalLink link={externalLink} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'link');
  });
});
