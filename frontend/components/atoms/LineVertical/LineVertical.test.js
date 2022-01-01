import React from 'react';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen } from '@testing-library/react';

describe('LineVertical', () => {
  it('Renders children', () => {
    renderWithProviders(
      false,
      <LineVertical>
        <h1 data-testid="line-child">Test Title</h1>
      </LineVertical>
    );
    const line = screen.getByTestId('line-vertical-wrapper');
    const lineChild = screen.getByTestId('line-child');
    expect(line).toContainElement(lineChild);
  });

  it('Renders large variant', () => {
    renderWithProviders(false, <LineVertical large={true} />);
    const line = screen.getByTestId('line-vertical');
    expect(line).toHaveStyle('min-width: 0.8rem');
    expect(line).toHaveStyle('margin-right: 2.2rem');
  });
});
