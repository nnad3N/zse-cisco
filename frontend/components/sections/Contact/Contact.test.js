import React from 'react';
import Contact from '@sections/Contact/Contact';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';
import contactInfo from '__mocks__/contactInfo';

const data = {
  title: 'test title',
  address: 'test address',
  schoolName: 'test school name',
  contactInfo,
};

describe('Contact', () => {
  it('Renders with provided data', () => {
    renderWithProviders(<Contact data={data} />);
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test address')).toBeInTheDocument();
    expect(screen.getByText('test school name')).toBeInTheDocument();
    expect(screen.getByText('test caption')).toBeInTheDocument();
    expect(screen.getByText('test info')).toBeInTheDocument();
  });
});
