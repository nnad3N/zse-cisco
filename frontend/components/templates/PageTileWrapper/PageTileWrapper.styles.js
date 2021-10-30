import styled from 'styled-components';

export const StyledPageTileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;
