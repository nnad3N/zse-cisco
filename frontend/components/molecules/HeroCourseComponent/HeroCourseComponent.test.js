import React from 'react';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import image from '__mocks__/image';
import data from '__mocks__/course';

describe('HeroCourseComponent', () => {
  it('Renders with provided data', () => {
    renderWithProviders(<HeroCourseComponent data={data} />);
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByAltText('icon alternative text')).toBeInTheDocument();
  });

  it('Renders an arrow link', () => {
    renderWithProviders(<HeroCourseComponent data={data} image={image} />);
    expect(screen.getByText('link name')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
