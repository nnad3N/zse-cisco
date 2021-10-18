import React from 'react';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

describe('LineHorizontal', () => {
  it('Renders children', () => {
    renderWithProviders(
      <LineHorizontal>
        <h1>Test Title</h1>
      </LineHorizontal>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('Renders large variant', () => {
    renderWithProviders(<LineHorizontal large={true} />);
    const line = screen.getByTestId('line-horizontal');
    expect(line).toHaveStyle('min-height: 0.8rem');
    expect(line).toHaveStyle('margin-top: 2.2rem');
  });
});
