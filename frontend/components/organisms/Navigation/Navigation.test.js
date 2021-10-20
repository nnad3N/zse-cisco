import React from 'react';
import Navigation from '@organisms/Navigation/Navigation';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const navLinks = [
  {
    id: 1,
    groupName: 'test',
    links: [
      {
        id: 2,
        name: 'test link',
        slug: 'link',
        newTab: false,
      },
      {
        id: 3,
        name: 'test link 2',
        slug: 'link',
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    groupName: 'test 2',
    links: [],
  },
];

describe('Navigation', () => {
  it('Renders correctly with data', () => {
    renderWithProviders(<Navigation navLinks={navLinks} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
    expect(screen.getByText('test link')).toBeInTheDocument();
    expect(screen.getByText('test link 2')).toBeInTheDocument();
  });
});
