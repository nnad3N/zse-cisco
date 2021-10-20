import React from 'react';
import PropTypes from 'prop-types';
import Button from '@atoms/Button/Button';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { HeroWrapper, ContentWrapper, ButtonWrapper, ImageWrapper } from './Hero.styles';

const Hero = ({ data: { title, description, buttons, image } }) => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <h1>{title}</h1>
        <LineVertical>
          <h2>{description}</h2>
        </LineVertical>
        <ButtonWrapper>
          {buttons.map((buttonData) => (
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
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
  image: PropTypes.object,
};

export default Hero;
