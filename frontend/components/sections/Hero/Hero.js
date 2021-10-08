import React from 'react';
import { dataShape } from 'types/componentTypes';
import Button from '@atoms/Button/Button';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { HeroWrapper, ContentWrapper, ButtonWrapper, ImageWrapper } from './Hero.styles';

const Hero = ({ data: { title, description, button, image } }) => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <h1>{title}</h1>
        <LineVertical>
          <h2>{description}</h2>
        </LineVertical>
        <ButtonWrapper>
          {button.map((buttonData) => (
            <Button key={buttonData.id} data={buttonData} hasMargin />
          ))}
        </ButtonWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Image image={image} hasRadius="true" />
      </ImageWrapper>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  data: dataShape,
};

export default Hero;
