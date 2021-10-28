import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { PricingComponentWrapper, Head, Row, Annotation } from './PricingComponent.styles';

const PricingComponent = ({ data: { title, tableHead, tableRows, annotations } }) => {
  return (
    <PricingComponentWrapper>
      <LineVertical>
        <h4>{title}</h4>
      </LineVertical>
      <Head>
        <span>{tableHead.rowName}</span>
        <span>{tableHead.rowContent}</span>
      </Head>
      {tableRows.map(({ rowName, rowContent, id }) => (
        <Row key={id}>
          <span>{rowName}</span>
          <span>{rowContent}</span>
        </Row>
      ))}
      <div>
        {annotations.map(({ annotation, id }) => (
          <Annotation key={id}>{annotation}</Annotation>
        ))}
      </div>
    </PricingComponentWrapper>
  );
};

PricingComponent.propTypes = {};

export default PricingComponent;
