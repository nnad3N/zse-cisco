import React from 'react';
import Button from '@atoms/Button/Button';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { HeroWrapper, ContentWrapper, ButtonWrapper, ImageWrapper } from './Hero.styles';
import { dataShape } from 'propTypes/componentTypes';

const Hero = ({ data: { header, description, buttons, image } }) => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <h1>{header}</h1>
        <LineVertical>
          <h2>{description}</h2>
        </LineVertical>
        <ButtonWrapper>
          {buttons.map((button) => (
            <Button key={button.id} data={button} hasMargin />
          ))}
        </ButtonWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Image image={image.data.attributes} />
      </ImageWrapper>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  data: dataShape,
};

Hero.defaultProps = {
  data: {
    header: '',
    description: '',
    buttons: [],
  },
};

export default Hero;
