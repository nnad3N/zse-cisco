import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '@organisms/PageSection/PageSection';
import LineVertical from '@atoms/LineVertical/LineVertical';
import RichText from '@molecules/RichText/RichText';
import PricingComponent from '@molecules/PricingComponent/PricingComponent';
import { PricingWrapper, PricingComponentsWrapper } from './Pricing.styles';

const Pricing = ({ data: { title, content, pricingComponents } }) => {
  return (
    <PricingWrapper>
      <PageSection>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
        <RichText>{content}</RichText>
        <PricingComponentsWrapper>
          {pricingComponents.map((pricingComponent, id) => (
            <PricingComponent key={id} data={pricingComponent} />
          ))}
        </PricingComponentsWrapper>
      </PageSection>
    </PricingWrapper>
  );
};

Pricing.propTypes = {};

export default Pricing;
