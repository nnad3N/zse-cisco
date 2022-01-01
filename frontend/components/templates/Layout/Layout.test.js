import React from 'react';
import Layout from 'components/templates/Layout/Layout';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import logo from '__mocks__/icon';
import footer from '__mocks__/footer';
import navLinks from '__mocks__/navLinks';

const navigation = {
  logo,
  navLinks,
};

describe('Layout', () => {
  it('Renders children', () => {
    renderWithProviders(
      false,
      <Layout navigation={navigation} footer={footer}>
        <h1>test title</h1>
      </Layout>
    );
    expect(screen.getByText('test title')).toBeInTheDocument();
  });

  it('Renders with provided data', () => {
    renderWithProviders(false, <Layout navigation={navigation} footer={footer} />);
    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('school name')).toBeInTheDocument();
    expect(screen.getByText('caption')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('image 2 alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('icon alternative text')).toBeInTheDocument();
  });

  it('Renders navigation', () => {
    renderWithProviders(
      false,
      <Layout navigation={navigation} footer={footer}>
        <h1>test child</h1>
      </Layout>
    );
    const menuButton = screen.getByLabelText('Menu Toggle Button');
    expect(menuButton).toBeInTheDocument();

    const child = screen.getByText('test child');
    const header = screen.getByText('header');
    expect(child).toBeInTheDocument();
    expect(header).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(child).not.toBeInTheDocument();
    expect(header).not.toBeInTheDocument();
    const navigationScreen = screen.getByRole('navigation');
    expect(navigationScreen).toBeInTheDocument();
  });

  it('Unrenders navigation', () => {
    renderWithProviders(
      false,
      <Layout navigation={navigation} footer={footer}>
        <h1>test child</h1>
      </Layout>
    );
    const menuButton = screen.getByLabelText('Menu Toggle Button');
    expect(menuButton).toBeInTheDocument();

    const child = screen.getByText('test child');
    const header = screen.getByText('header');
    expect(child).toBeInTheDocument();
    expect(header).toBeInTheDocument();

    fireEvent.click(menuButton);
    const navigationScreen = screen.getByRole('navigation');
    expect(child).not.toBeInTheDocument();
    expect(header).not.toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(navigationScreen).not.toBeInTheDocument();
    const child2 = screen.getByText('test child');
    const header2 = screen.getByText('header');
    expect(child2).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
  });
});
