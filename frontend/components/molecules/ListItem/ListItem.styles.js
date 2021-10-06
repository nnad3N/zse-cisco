import styled from 'styled-components';

export const ListItemWrapper = styled.li`
  display: flex;
  align-items: flex-end;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;

export const ImageWrapper = styled.div`
  width: 2.2rem;
  margin-right: 1.5rem;
`;
