import React from 'react';
import FunctionalLink from '@atoms/FunctionalLink/FunctionalLink';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import link from '__mocks__/link';
import externalLink from '__mocks__/externalLink';

describe('FunctionalLink', () => {
  it('Renders the name', () => {
    renderWithProviders(false, <FunctionalLink link={link} />);
    expect(screen.getByText('link text')).toBeInTheDocument();
  });

  it('Renders the link', () => {
    renderWithProviders(false, <FunctionalLink link={link} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });

  it('Renders the external link', () => {
    renderWithProviders(false, <FunctionalLink link={externalLink} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.google.com');
  });
});
