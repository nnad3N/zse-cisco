import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.mainColor};
  position: relative;
  padding: ${({ theme }) => theme.dimensions.navigationPadding};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  column-gap: ${({ theme }) => theme.dimensions.navigationColumnGap};
  row-gap: ${({ theme }) => theme.dimensions.navigationRowGap};
  align-content: start;

  ${({ theme }) => theme.mq.mobileMedium} {
    padding: 20rem ${({ theme }) => theme.dimensions.paddingMobile};
  }

  img {
    border-radius: 0;
  }
`;

export const ExitButton = styled.button`
  border: none;
  background-color: transparent;
  height: 5rem;
  width: 5rem;
  position: absolute;
  top: 5vh;
  right: 5vw;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  justify-self: center;

  ${({ theme }) => theme.mq.mobileLarge} {
    width: 100%;
  }

  & > div {
    margin-bottom: 2rem;
    text-align: left;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;
