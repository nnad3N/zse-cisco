import React from 'react';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroCourseComponentWrapper, ImageWrapper } from './HeroCourseComponent.styles';

const HeroCourseComponent = ({ data, image }) => {
  const { title, description, link, linkTitle } = data;

  return (
    <HeroCourseComponentWrapper>
      <ImageWrapper />
      <h4>{title}</h4>
      <LineVertical>
        <p>{description}</p>
      </LineVertical>
      <ArrowLink link={link} title={linkTitle} image={image} />
    </HeroCourseComponentWrapper>
  );
};

export default HeroCourseComponent;
