import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import RichText from '@molecules/RichText/RichText';
import PageSection from '@organisms/PageSection/PageSection';
import { RegulationsWrapper } from './Regulations.style';

const Regulations = ({ data: { title, content } }) => {
  return (
    <RegulationsWrapper>
      <PageSection>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
        <RichText>{content}</RichText>
      </PageSection>
    </RegulationsWrapper>
  );
};

Regulations.propTypes = {};

export default Regulations;
