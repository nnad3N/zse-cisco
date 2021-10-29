import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import PageTile from '@templates/PageTile/PageTile';
import { Semester, Head, Row, Annotation } from './PricingComponent.styles';

const PricingComponent = ({ data: { title, semester, tableHead, tableRows, annotations } }) => {
  return (
    <PageTile>
      <LineVertical>
        <h4>{title}</h4>
      </LineVertical>
      {semester && <Semester>{semester}</Semester>}
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
    </PageTile>
  );
};

PricingComponent.propTypes = {};

export default PricingComponent;
