import React from 'react';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroPricingWrapper, DescriptionWrapper } from './HeroPricing.styles';

const HeroPricing = ({ data }) => {
  const { title, description, linkTitle, link } = data;
  return (
    <HeroPricingWrapper>
      <LineVertical large>
        <h1>{title}</h1>
      </LineVertical>
      <DescriptionWrapper>
        <p>{description}</p>
        <ArrowLink data={link} title={linkTitle} />
      </DescriptionWrapper>
    </HeroPricingWrapper>
  );
};

export default HeroPricing;
