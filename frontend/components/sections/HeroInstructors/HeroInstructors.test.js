import React from 'react';
import HeroInstructors from '@sections/HeroInstructors/HeroInstructors';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import instructor from '__mocks__/instructor';

const data = {
  instructorComponent: [instructor],
};

describe('HeroInstructors', () => {
  it('Renders with data', () => {
    renderWithProviders(<HeroInstructors data={data} />);
    expect(screen.getByText('test header')).toBeInTheDocument();
    expect(screen.getByText('test instructor')).toBeInTheDocument();
    expect(screen.getByText('test instructor description')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
  });
});
