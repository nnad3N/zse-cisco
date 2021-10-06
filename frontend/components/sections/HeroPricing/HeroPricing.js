import React from 'react';
import PropTypes from 'prop-types';
import Button from '@atoms/Button/Button';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroPricingWrapper, DescriptionWrapper } from './HeroPricing.styles';

const HeroPricing = ({ data: { title, description, button } }) => {
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

HeroPricing.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.object,
  }),
};

export default HeroPricing;
