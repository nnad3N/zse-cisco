import styled from 'styled-components';

export const ListItemWrapper = styled.li`
  display: flex;
  align-items: ${({ wrap }) => (wrap ? 'flex-start' : 'center')};

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;

export const Bullet = styled.span`
  position: relative;
  min-width: 2.2rem;
  min-height: 2.2rem;
  border-radius: 50%;
  margin-right: 1.5rem;
  background-color: ${({ theme }) => theme.colors.accentColor};

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    min-width: 1.2rem;
    min-height: 1.2rem;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;
