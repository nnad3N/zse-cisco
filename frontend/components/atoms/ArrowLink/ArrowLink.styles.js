import styled from 'styled-components';

export const ArrowLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  &:visited {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.mainColor};
  }

  h5 {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.mainColor};
    margin-right: 2rem;
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export const ImageWrapper = styled.div`
  width: 3.8rem;
`;
