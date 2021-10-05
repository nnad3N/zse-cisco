import React from 'react';
import Button from '@atoms/Button/Button';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { HeroWrapper, ContentWrapper, ButtonWrapper, ImageWrapper } from './Hero.styles';

const Hero = ({ data }) => {
  const { title, description, button, image } = data;

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

export default Hero;
