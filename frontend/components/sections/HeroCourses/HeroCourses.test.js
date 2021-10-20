import React from 'react';
import HeroCourses from '@sections/HeroCourses/HeroCourses';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import arrowImage from '__mocks__/image';
import course from '__mocks__/course';

const data = {
  title: 'test section title',
  courses: [course],
  arrowImage,
};

describe('HeroCourses', () => {
  it('Renders with data', () => {
    renderWithProviders(<HeroCourses data={data} />);
    expect(screen.getByText('test section title')).toBeInTheDocument();
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
    expect(screen.getByText('link name')).toBeInTheDocument();
  });
});
