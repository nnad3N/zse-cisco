import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NavBar, Logo, Links, LinkGroup, StyledLink, LinkContainer, LinkSpan, LinkContainerBackground } from './Nav.styles';

const Nav = ({ navigation, isHovered, setIsHovered }) => {
  const { links } = navigation;
  const [currentLinks, setCurrentLinks] = useState([]);
  const linkContainer = useRef(null);
  const linkSpan = useRef(null);
  const linkContainerBackground = useRef(null);

  const handleHover = (target, linkID) => {
    onHoverLinkSpan(target);
    onHoverLinkBackground();

    const filteredLinks = links.filter((link) => link.id === linkID)[0].navLinks;
    setCurrentLinks(filteredLinks);
  };

  const onHoverLinkSpan = (target) => {
    const { top, left, height, width } = target.getBoundingClientRect();
    const { scrollX, scrollY } = window;
    linkContainer.current.style.transform = `translate(calc(${width / 2}px - 50%), ${height * 1.2}px)`;
    linkSpan.current.style.width = `${width + 2}px`;
    linkSpan.current.style.height = `${height * 1.75}px`;
    linkSpan.current.style.transform = `translate(${left + scrollX - 1}px, ${top + scrollY - 1}px)`;
  };

  const onHoverLinkBackground = () => {
    setTimeout(() => {
      const { top, left, height, width } = linkContainer.current.getBoundingClientRect();
      const { scrollX, scrollY } = window;

      linkContainerBackground.current.style.width = `${width}px`;
      linkContainerBackground.current.style.height = `${height}px`;
      linkContainerBackground.current.style.transform = `translate(${left + scrollX}px, ${top + scrollY}px)`;
    }, 0);
  };

  return (
    <NavBar>
      <Logo>
        <Link href="/">Strapi Blog</Link>
      </Logo>
      <Links>
        {links.map(({ id, linkGroup }) => {
          return (
            <LinkGroup key={id} onMouseOver={(e) => handleHover(e.target, id)} onMouseEnter={() => setIsHovered(true)}>
              {linkGroup}
            </LinkGroup>
          );
        })}
      </Links>

      {isHovered ? (
        <>
          <LinkContainerBackground ref={linkContainerBackground} />
          <LinkSpan
            ref={linkSpan}
            onMouseLeave={() => {
              setIsHovered((state) => !state);
            }}
          >
            <LinkContainer ref={linkContainer}>
              {currentLinks.map(({ id, name, slug }) => (
                <Link key={id} href={`/${slug}`}>
                  <StyledLink>{name}</StyledLink>
                </Link>
              ))}
            </LinkContainer>
          </LinkSpan>
        </>
      ) : null}
    </NavBar>
  );
};

export default Nav;
