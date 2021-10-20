import styled from 'styled-components';

export const StyledLayout = styled.div`
  max-height: ${({ isNavOpen }) => (isNavOpen ? '100vh' : 'fit-content')};
  overflow: hidden;
`;
