import React from 'react';
import Navigation from '@organisms/Navigation/Navigation';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import links from '__mocks__/links';

const navLinks = [
  {
    id: 1,
    groupName: 'test',
    links,
  },
  {
    id: 4,
    groupName: 'test 2',
    links: [],
  },
];

describe('Navigation', () => {
  it('Renders with provided data', () => {
    renderWithProviders(<Navigation navLinks={navLinks} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
    expect(screen.getByText('test link')).toBeInTheDocument();
    expect(screen.getByText('test link 2')).toBeInTheDocument();
  });
});
