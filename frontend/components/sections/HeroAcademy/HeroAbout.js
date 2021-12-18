import React from 'react';
import { dataShape } from 'propTypes/componentTypes';
import Button from '@atoms/Button/Button';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { HeroAboutWrapper, HeaderWrapper, DescriptionWrapper, ImageWrapper } from './HeroAbout.styles';

const HeroAbout = ({ data: { header, description, button, image } }) => {
  return (
    <HeroAboutWrapper>
      <HeaderWrapper>
        <LineVertical large>
          <h1>{header}</h1>
        </LineVertical>
      </HeaderWrapper>
      <DescriptionWrapper>
        <p>{description}</p>
        <Button data={button} />
      </DescriptionWrapper>
      <ImageWrapper>
        <Image image={image.data.attributes} />
      </ImageWrapper>
    </HeroAboutWrapper>
  );
};

HeroAbout.propTypes = {
  data: dataShape,
};

HeroAbout.defaultProps = {
  data: {
    header: '',
    description: '',
  },
};

export default HeroAbout;
