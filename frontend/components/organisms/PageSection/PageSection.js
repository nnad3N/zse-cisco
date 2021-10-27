import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: ${({ theme }) => theme.dimensions.pageSectionPadding};
  width: clamp(${({ theme }) => theme.dimensions.pageSectionWidth}, 100%, 38vw);

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;

const PageSection = ({ children }) => {
  return <PageSectionWrapper>{children}</PageSectionWrapper>;
};

PageSection.propTypes = {};

export default PageSection;
