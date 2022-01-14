import React from 'react';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

describe('LineHorizontal', () => {
  it('Renders children', () => {
    renderWithProviders(
      false,
      <LineHorizontal>
        <h1 data-testid="line-child">Test Title</h1>
      </LineHorizontal>
    );
    const line = screen.getByTestId('line-horizontal-wrapper');
    const lineChild = screen.getByTestId('line-child');
    expect(line).toContainElement(lineChild);
  });

  it('Renders large variant', () => {
    renderWithProviders(false, <LineHorizontal large={true} />);
    const line = screen.getByTestId('line-horizontal');
    expect(line).toHaveStyle('min-height: 0.8rem');
    expect(line).toHaveStyle('margin-top: 2.2rem');
  });
});
