import React from 'react';
import Layout from 'components/templates/Layout/Layout';
import { renderWithProviders } from 'utils/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';

const navigation = {
  logo: {
    url: '/',
    alternativeText: 'logo alternative text',
    width: 10,
    height: 10,
  },
  navLinks: [
    {
      id: 1,
      groupName: 'test',
      links: [
        {
          id: 2,
          name: 'test link',
          slug: 'link',
          newTab: false,
        },
        {
          id: 3,
          name: 'test link 2',
          slug: 'link',
          newTab: false,
        },
      ],
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
  footerInfo: [
    {
      id: 1,
      caption: 'test caption',
      info: 'test info',
    },
  ],
  footerImages: [
    {
      id: 2,
      url: '/',
      alternativeText: 'image alternative text',
      width: 10,
      height: 10,
    },
    {
      id: 3,
      url: '/test',
      alternativeText: 'image 2 alternative text',
      width: 10,
      height: 10,
    },
  ],
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

  it('Renders correctly with data', () => {
    renderWithProviders(<Layout navigation={navigation} footer={footer} />);
    expect(screen.getByText('test header')).toBeInTheDocument();
    expect(screen.getByText('test school name')).toBeInTheDocument();
    expect(screen.getByText('test caption')).toBeInTheDocument();
    expect(screen.getByText('test info')).toBeInTheDocument();
    expect(screen.getByAltText('image alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('image 2 alternative text')).toBeInTheDocument();
    expect(screen.getByAltText('logo alternative text')).toBeInTheDocument();
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
