import React from 'react';
import { dataShape } from 'types/componentTypes';
import Button from '@atoms/Button/Button';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { HeroAcademyWrapper, HeaderWrapper, DescriptionWrapper, ImageWrapper } from './HeroAcademy.styles';

const HeroAcademy = ({ data: { title, description, button, image } }) => {
  return (
    <HeroAcademyWrapper>
      <HeaderWrapper>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
      </HeaderWrapper>
      <DescriptionWrapper>
        <p>{description}</p>
        <Button data={button} />
      </DescriptionWrapper>
      <ImageWrapper>
        <Image image={image} />
      </ImageWrapper>
    </HeroAcademyWrapper>
  );
};

HeroAcademy.propTypes = {
  data: dataShape,
};

export default HeroAcademy;
