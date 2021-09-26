import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavBar = styled.nav`
  display: flex;
  padding: 1rem 10rem;
  background-color: lightgray;
  position: sticky;
  top: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

export const LinkGroup = styled.h3`
  padding: 0.5rem 2rem;
  display: flex;
  cursor: default;
`;

export const StyledLink = styled.a`
  margin-right: 3rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LinkContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 20vw;
  max-width: 30vw;
  height: max-content;
  padding: 3rem;
`;

export const LinkSpan = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const LinkContainerBackground = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 15px -8px rgba(0, 0, 0, 0.6);
`;
