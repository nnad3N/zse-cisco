import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LinkGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const LinkHeader = styled.ul`
  margin-right: 20px;
`;

const Nav = ({ navigation }) => {
  const { links } = navigation;
  console.log(links);
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {links.map(({ id, linkGroup, navLinks }) => {
              return (
                <li key={id}>
                  {console.log(navLinks)}
                  <LinkGroup>
                    <LinkHeader>{linkGroup}</LinkHeader>
                    {navLinks.map(({ id, name, slug }) => (
                      <Link key={id} href={`/${slug}`}>
                        {name}
                      </Link>
                    ))}
                  </LinkGroup>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
