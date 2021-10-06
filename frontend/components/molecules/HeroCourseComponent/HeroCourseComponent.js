import React from 'react';
import PropTypes from 'prop-types';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroCourseComponentWrapper, ImageWrapper } from './HeroCourseComponent.styles';

const HeroCourseComponent = ({ data, image }) => {
  const {
    title,
    description,
    link: { slug },
    linkName,
  } = data;

  return (
    <HeroCourseComponentWrapper>
      <ImageWrapper />
      <h4>{title}</h4>
      <LineVertical>
        <p>{description}</p>
      </LineVertical>
      <ArrowLink slug={slug} title={linkName} image={image} />
    </HeroCourseComponentWrapper>
  );
};

HeroCourseComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    linkName: PropTypes.string.isRequired,
  }),
  image: PropTypes.object,
};

HeroCourseComponent.defaultProps = {
  data: {
    link: {
      slug: '',
    },
    linkName: 'Link',
  },
};

export default HeroCourseComponent;
