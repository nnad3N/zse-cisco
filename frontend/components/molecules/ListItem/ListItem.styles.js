import styled from 'styled-components';

export const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;

export const ImageWrapper = styled.div`
  width: 2rem;
  margin-right: 2rem;
`;
