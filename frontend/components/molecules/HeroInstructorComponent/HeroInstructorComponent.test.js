import React from 'react';
import HeroInstructorComponent from '@molecules/HeroInstructorComponent/HeroInstructorComponent';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

const data = {
  header: 'test header',
  instructor: 'test instructor',
  description: 'test description',
  image: {
    url: '/',
    alternativeText: 'image alternative text',
    width: 10,
    height: 10,
  },
};

describe('HeroInstructorComponent', () => {
  it('Renders correctly with data', () => {
    renderWithProviders(<HeroInstructorComponent data={data} />);
    expect(screen.getByText('test header')).toBeInTheDocument();
    expect(screen.getByText('test instructor')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
