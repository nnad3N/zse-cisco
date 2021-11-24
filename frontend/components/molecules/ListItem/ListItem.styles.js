import styled from 'styled-components';

export const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  width: fit-content;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;

export const Bullet = styled.span`
  position: relative;
  min-width: 22px;
  min-height: 22px;
  border-radius: 50%;
  margin-right: 1.5rem;
  background-color: ${({ theme }) => theme.colors.accentColor};

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    min-width: 12px;
    min-height: 12px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.mainColor};
  }

  ${({ theme }) => theme.mq.mobileSmall} {
    min-width: 16px;
    min-height: 16px;

    &::before {
      min-width: 9px;
      min-height: 9px;
    }
  }
`;
