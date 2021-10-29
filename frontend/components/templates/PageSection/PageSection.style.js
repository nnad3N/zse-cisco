import styled from 'styled-components';

export const PageSectionWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.padding.xV};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: ${({ theme }) => theme.dimensions.pageSectionPadding};
  width: ${({ theme }) => theme.dimensions.pageSectionWidth};

  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    margin-bottom: ${({ theme }) => theme.padding.mV};
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;
