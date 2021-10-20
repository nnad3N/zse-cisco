import React from 'react';
import Layout from 'components/templates/Layout/Layout';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import logo from '__mocks__/icon';
import links from '__mocks__/links';
import footerInfo from '__mocks__/contactInfo';
import footerImages from '__mocks__/images';

const navigation = {
  logo,
  navLinks: [
    {
      id: 1,
      groupName: 'test',
      links,
    },
    {
      id: 4,
      groupName: 'test 2',
      links: [],
    },
  ],
};

const footer = {
  header: 'test header',
  schoolName: 'test school name',
  footerInfo,
  footerImages,
};

describe('Layout', () => {
  it('Renders children', () => {
    renderWithProviders(
      <Layout navigation={navigation} footer={footer}>
        <h1>test title</h1>
      </Layout>
    );
    expect(screen.getByText('test title')).toBeInTheDocument();
  });

  it('Renders with provided data', () => {
    renderWithProviders(<Layout navigation={navigation} footer={footer} />);
    expect(screen.getByText('test header')).toBeInTheDocument();
    expect(screen.getByText('test school name')).toBeInTheDocument();
    expect(screen.getByText('test caption')).toBeInTheDocument();
    expect(screen.getByText('test info')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('image 2 alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('icon alternative text')).toBeInTheDocument();
  });

  it('Renders navigation', () => {
    renderWithProviders(<Layout navigation={navigation} footer={footer} />);
    const button = screen.getByTestId('menu-button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const navigationScreen = screen.getByRole('navigation');
    expect(navigationScreen).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
    expect(screen.getByText('test link')).toBeInTheDocument();
    expect(screen.getByText('test link 2')).toBeInTheDocument();
  });

  it('Unrenders navigation', () => {
    renderWithProviders(<Layout navigation={navigation} footer={footer} />);
    const button = screen.getByTestId('menu-button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const navigationScreen = screen.getByRole('navigation');
    fireEvent.click(button);
    expect(navigationScreen).not.toBeInTheDocument();
  });
});
