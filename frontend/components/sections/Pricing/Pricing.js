import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import PageSection from 'components/templates/PageSection/PageSection';
import LineVertical from '@atoms/LineVertical/LineVertical';
import RichText from '@molecules/RichText/RichText';
import PageTileWrapper from '@templates/PageTileWrapper/PageTileWrapper';
import PricingComponent from '@molecules/PricingComponent/PricingComponent';

const Pricing = ({ data: { header, content, pricingComponents } }) => {
  return (
    <PageWrapper>
      <PageSection>
        <LineVertical large>
          <h1>{header}</h1>
        </LineVertical>
        <RichText>{content}</RichText>
        <PageTileWrapper>
          {pricingComponents.map((pricingComponent, id) => (
            <PricingComponent key={id} data={pricingComponent} />
          ))}
        </PageTileWrapper>
      </PageSection>
    </PageWrapper>
  );
};

Pricing.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string,
    pricingComponents: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

Pricing.defaultProps = {
  data: {
    header: '',
    content: '',
    pricingComponents: [],
  },
};

export default Pricing;
