import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledNavigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.mainColor};
  position: relative;
  padding: ${({ theme }) => theme.dimensions.navigationPadding};
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  column-gap: ${({ theme }) => theme.dimensions.navigationColumnGap};
  row-gap: ${({ theme }) => theme.dimensions.navigationRowGap};
`;

const ExitButton = styled.div`
  height: 5rem;
  width: 5rem;
  position: absolute;
  top: 5vh;
  right: 5vw;
  background-color: #fff;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    border-bottom: 0.4rem solid ${({ theme }) => theme.colors.accentColor};
    margin-bottom: 2rem;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;

const Navigation = ({ links, setIsNavOpen }) => {
  console.log(links);

  return (
    <StyledNavigation>
      <ExitButton onClick={() => setIsNavOpen((state) => !state)} />

      {links.map(({ groupName, id, links: navLinks }) => (
        <ContentWrapper key={id}>
          <h3>{groupName}</h3>
          <ul>
            {navLinks.map(({ id, name, slug, newTab }) => (
              <li nav="true" key={id}>
                <Link href={`/${slug}`} passHref>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ContentWrapper>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
