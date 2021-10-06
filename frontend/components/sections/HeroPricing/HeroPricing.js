import React from 'react';
import Button from '@atoms/Button/Button';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { HeroPricingWrapper, DescriptionWrapper } from './HeroPricing.styles';

const HeroPricing = ({ data }) => {
  const { title, description, button } = data;

  return (
    <HeroPricingWrapper>
      <LineHorizontal large>
        <h1>{title}</h1>
      </LineHorizontal>
      <DescriptionWrapper>
        <p>{description}</p>
        <Button data={button} accent />
      </DescriptionWrapper>
    </HeroPricingWrapper>
  );
};

export default HeroPricing;
