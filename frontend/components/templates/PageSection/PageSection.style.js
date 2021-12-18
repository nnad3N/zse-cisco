import styled from 'styled-components';

export const PageSectionWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.padding.xV};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: ${({ theme }) => theme.dimensions.pageSectionPadding};
  width: ${({ theme }) => theme.dimensions.pageSectionWidth};

  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mq.laptop} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.tablet} {
    border-radius: 0;
    margin-bottom: ${({ theme }) => theme.padding.sV};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    border-radius: 0;
    margin-bottom: ${({ theme }) => theme.padding.ssV};
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;
