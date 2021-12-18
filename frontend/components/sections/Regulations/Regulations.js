import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import LineVertical from '@atoms/LineVertical/LineVertical';
import RichText from '@molecules/RichText/RichText';
import PageSection from 'components/templates/PageSection/PageSection';

const Regulations = ({ data: { header, content } }) => {
  return (
    <PageWrapper>
      <PageSection>
        <LineVertical large>
          <h1>{header}</h1>
        </LineVertical>
        <RichText>{content}</RichText>
      </PageSection>
    </PageWrapper>
  );
};

Regulations.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

Regulations.defaultProps = {
  data: {
    header: '',
    content: '',
  },
};

export default Regulations;
