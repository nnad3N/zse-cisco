import React from 'react';
import PricingComponent from '@molecules/PricingComponent/PricingComponent';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import data from '__mocks__/pricing';

describe('PricingComponent', () => {
  it('Renders with provided data', () => {
    renderWithProviders(false, <PricingComponent data={data} />);
    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('semester')).toBeInTheDocument();
    expect(screen.getByText('group')).toBeInTheDocument();
    expect(screen.getByText('price')).toBeInTheDocument();
    expect(screen.getByText('student')).toBeInTheDocument();
    expect(screen.getByText('studentPrice')).toBeInTheDocument();
    expect(screen.getByText('graduate')).toBeInTheDocument();
    expect(screen.getByText('graduatePrice')).toBeInTheDocument();
    expect(screen.getByText('others')).toBeInTheDocument();
    expect(screen.getByText('othersPrice')).toBeInTheDocument();
    expect(screen.getByText('annotation')).toBeInTheDocument();
  });
});
