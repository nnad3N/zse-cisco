import styled from 'styled-components';

export const Semester = styled.span`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.subText};
  color: ${({ theme }) => theme.colors.accentColor};
  font-weight: 600;
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.darkBlue};

  span {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export const Head = styled(Row)`
  margin-top: 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.accentColor};

  span {
    font-size: ${({ theme }) => theme.fontSize.captionMedium};
  }
`;

export const Annotation = styled.p`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.captionSmall};
  font-weight: 300;
  margin-top: 1rem;

  &:first-child {
    margin-top: 2rem;
  }
`;
