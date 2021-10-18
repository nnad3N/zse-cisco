import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: absolute;
  min-height: 90vh;
  width: 100%;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: ${({ theme }) => theme.dimensions.navigationPadding} ${({ theme }) => theme.dimensions.padding};
  display: grid;
  grid-template-columns: 40rem 40rem;
  row-gap: ${({ theme }) => theme.dimensions.navigationRowGap};
  justify-content: space-between;
  align-content: start;

  ${({ theme }) => theme.mq.laptop} {
    grid-template-columns: 40rem;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.mobileMedium} {
    grid-template-columns: 1fr;
    padding: 6rem ${({ theme }) => theme.dimensions.paddingMobile};
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
  width: 100%;
  justify-self: center;

  & > div {
    margin-bottom: 2rem;
    text-align: left;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;
