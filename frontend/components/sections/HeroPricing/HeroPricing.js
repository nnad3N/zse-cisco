import React from 'react';
import Button from '@atoms/Button/Button';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroPricingWrapper, DescriptionWrapper } from './HeroPricing.styles';

const HeroPricing = ({ data }) => {
  const { title, description, button } = data;

  return (
    <HeroPricingWrapper>
      <LineHorizontal>
        <h1>{title}</h1>
      </LineHorizontal>
      <DescriptionWrapper>
        <LineVertical>
          <p>{description}</p>
        </LineVertical>
        <Button data={button} accent />
      </DescriptionWrapper>
    </HeroPricingWrapper>
  );
};

export default HeroPricing;
