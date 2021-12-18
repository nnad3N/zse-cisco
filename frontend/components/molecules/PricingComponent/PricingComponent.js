import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import PageTile from '@templates/PageTile/PageTile';
import { Semester, Head, Row, Annotation } from './PricingComponent.styles';

const PricingComponent = ({ data }) => {
  const { header, semester, group, price, student, studentPrice, graduate, graduatePrice, others, othersPrice, annotation } = data;

  return (
    <PageTile>
      <LineVertical>
        <h4>{header}</h4>
      </LineVertical>
      {semester && <Semester>{semester}</Semester>}
      <Head>
        <span>{group}</span>
        <span>{price}</span>
      </Head>
      <Row>
        <span>{student}</span>
        <span>{studentPrice}</span>
      </Row>
      <Row>
        <span>{graduate}</span>
        <span>{graduatePrice}</span>
      </Row>
      <Row>
        <span>{others}</span>
        <span>{othersPrice}</span>
      </Row>
      {annotation && <Annotation>{annotation}</Annotation>}
    </PageTile>
  );
};

PricingComponent.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    semester: PropTypes.string,
    group: PropTypes.string,
    price: PropTypes.string,
    student: PropTypes.string,
    studentPrice: PropTypes.string,
    graduate: PropTypes.string,
    graduatePrice: PropTypes.string,
    others: PropTypes.string,
    othersPrice: PropTypes.string,
    annotation: PropTypes.string,
  }).isRequired,
};

PricingComponent.defaultProps = {
  data: {
    header: '',
    semester: '',
    group: '',
    price: '',
    student: '',
    studentPrice: '',
    graduate: '',
    graduatePrice: '',
    others: '',
    othersPrice: '',
    annotations: [],
  },
};

export default PricingComponent;
