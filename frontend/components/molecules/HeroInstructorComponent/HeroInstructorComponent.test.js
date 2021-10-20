import React from 'react';
import HeroInstructorComponent from '@molecules/HeroInstructorComponent/HeroInstructorComponent';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import data from '__mocks__/instructor';

describe('HeroInstructorComponent', () => {
  it('Renders with provided data', () => {
    renderWithProviders(<HeroInstructorComponent data={data} />);
    expect(screen.getByText('test header')).toBeInTheDocument();
    expect(screen.getByText('test instructor')).toBeInTheDocument();
    expect(screen.getByText('test instructor description')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
