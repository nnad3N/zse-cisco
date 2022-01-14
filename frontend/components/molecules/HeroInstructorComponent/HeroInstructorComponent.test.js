import React from 'react';
import HeroInstructorComponent from '@molecules/HeroInstructorComponent/HeroInstructorComponent';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import data from '__mocks__/instructor';

describe('HeroInstructorComponent', () => {
  it('Renders with provided data', () => {
    renderWithProviders(false, <HeroInstructorComponent data={data} />);
    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });
});
