import React from 'react';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroCourseComponentWrapper, ImageWrapper } from './HeroCourseComponent.styles';

const HeroCourseComponent = ({ data }) => {
  const { title, description, link, linkTitle } = data;
  return (
    <HeroCourseComponentWrapper>
      <ImageWrapper />
      <h4>{title}</h4>
      <LineVertical>
        <p>{description}</p>
      </LineVertical>
      <ArrowLink data={link} title={linkTitle} />
    </HeroCourseComponentWrapper>
  );
};

export default HeroCourseComponent;
