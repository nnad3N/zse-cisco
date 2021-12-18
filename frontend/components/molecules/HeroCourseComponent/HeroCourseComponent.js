import React from 'react';
import PropTypes from 'prop-types';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroCourseComponentWrapper } from './HeroCourseComponent.styles';

const HeroCourseComponent = ({ data: { header, description, url }, linkCaption }) => {
  return (
    <HeroCourseComponentWrapper>
      <h4>{header}</h4>
      <LineVertical>
        <p>{description}</p>
      </LineVertical>
      <ArrowLink url={url} text={linkCaption} />
    </HeroCourseComponentWrapper>
  );
};

HeroCourseComponent.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
  linkCaption: PropTypes.string,
};

HeroCourseComponent.defaultProps = {
  data: {
    header: '',
    description: '',
    url: '',
  },
  linkCaption: '',
};

export default HeroCourseComponent;
