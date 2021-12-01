import React from 'react';
import PropTypes from 'prop-types';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroCourseComponentWrapper } from './HeroCourseComponent.styles';

const HeroCourseComponent = ({
  data: {
    title,
    description,
    link: { slug },
    linkName,
  },
  image,
}) => {
  return (
    <HeroCourseComponentWrapper>
      <h4>{title}</h4>
      <LineVertical>
        <p>{description}</p>
      </LineVertical>
      <ArrowLink slug={slug} title={linkName} />
    </HeroCourseComponentWrapper>
  );
};

HeroCourseComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.shape({
      slug: PropTypes.string,
    }),
    linkName: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.object,
};

HeroCourseComponent.defaultProps = {
  data: {
    title: '',
    description: '',
    linkName: '',
    link: {
      slug: '',
    },
  },
};

export default HeroCourseComponent;
