import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { ContentWrapper } from './Rodo.styles';

const Rodo = ({ data: { title, description } }) => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
        <p>{description}</p>
      </ContentWrapper>
    </PageWrapper>
  );
};

Rodo.propTypes = {};

export default Rodo;
