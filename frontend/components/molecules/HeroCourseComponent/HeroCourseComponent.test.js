import React from 'react';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const data = {
  title: 'test title',
  description: 'test description',
  link: { slug: 'link' },
  linkName: 'link name',
  icon: {
    url: '/',
    alternativeText: 'icon alternative text',
    width: 10,
    height: 10,
  },
};

const image = {
  url: '/',
  alternativeText: 'image alternative text',
  width: 10,
  height: 10,
};

describe('HeroCourseComponent', () => {
  it('Renders correctly with data', () => {
    renderWithProviders(<HeroCourseComponent data={data} />);
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByAltText('icon alternative text')).toBeInTheDocument();
  });

  it('Renders correctly with arrow link', () => {
    renderWithProviders(<HeroCourseComponent data={data} image={image} />);
    expect(screen.getByText('link name')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
