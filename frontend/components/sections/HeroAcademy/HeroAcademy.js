import React from 'react';
import Button from '@atoms/Button/Button';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroAcademyWrapper, HeaderWrapper, DescriptionWrapper, ImageWrapper } from './HeroAcademy.styles';

const HeroAcademy = ({ data }) => {
  const { title, description, button } = data;
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
      <ImageWrapper />
    </HeroAcademyWrapper>
  );
};

export default HeroAcademy;
