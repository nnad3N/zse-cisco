import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import LineVertical from '@atoms/LineVertical/LineVertical';
import RichText from '@molecules/RichText/RichText';
import PageSection from 'components/templates/PageSection/PageSection';

const Regulations = ({ data: { title, content } }) => {
  return (
    <PageWrapper>
      <PageSection>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
        <RichText>{content}</RichText>
      </PageSection>
    </PageWrapper>
  );
};

Regulations.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Regulations;
