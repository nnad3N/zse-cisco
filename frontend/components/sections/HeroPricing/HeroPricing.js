import React from 'react';
import PropTypes from 'prop-types';
import Button from '@atoms/Button/Button';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { HeroPricingWrapper, DescriptionWrapper } from './HeroPricing.styles';

const HeroPricing = ({ data: { header, description, button } }) => {
  return (
    <HeroPricingWrapper>
      <LineHorizontal>
        <h1>{header}</h1>
      </LineHorizontal>
      <DescriptionWrapper>
        <LineVertical>
          <p>{description}</p>
        </LineVertical>
        <Button data={button} accented />
      </DescriptionWrapper>
    </HeroPricingWrapper>
  );
};

HeroPricing.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.object,
  }).isRequired,
};

HeroPricing.defaultProps = {
  data: {
    header: '',
    description: '',
  },
};

export default HeroPricing;
