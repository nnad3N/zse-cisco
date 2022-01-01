import React from 'react';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import data from '__mocks__/course';

describe('HeroCourseComponent', () => {
  it('Renders with provided data', () => {
    renderWithProviders(false, <HeroCourseComponent data={data} />);
    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });

  it('Renders an arrow link', () => {
    renderWithProviders(false, <HeroCourseComponent data={data} linkCaption="caption" />);
    expect(screen.getByText('caption')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });
});
