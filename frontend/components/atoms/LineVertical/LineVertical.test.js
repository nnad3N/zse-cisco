import React from 'react';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

describe('LineVertical', () => {
  it('Renders children', () => {
    renderWithProviders(
      <LineVertical>
        <h1>Test Title</h1>
      </LineVertical>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('Renders large variant', () => {
    renderWithProviders(<LineVertical large={true} />);
    const line = screen.getByTestId('line-vertical');
    expect(line).toHaveStyle('min-width: 0.8rem');
    expect(line).toHaveStyle('margin-right: 2.2rem');
  });
});
