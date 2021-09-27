import React from 'react';
import styled from 'styled-components';
import ArrowLink from '../atoms/ArrowLink';

const HeroPricingWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `5rem ${theme.dimensions.padding}`};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.accentColor};
    border-color: ${({ theme }) => theme.colors.accentColor};
  }

  & > div {
    margin: 0 auto;
  }
`;

const HeroPricing = ({ data }) => {
  const { title, description, linkTitle, link } = data;
  return (
    <HeroPricingWrapper>
      <h1>{title}</h1>
      <DescriptionWrapper>
        <p>{description}</p>
        <ArrowLink data={link} title={linkTitle} />
      </DescriptionWrapper>
    </HeroPricingWrapper>
  );
};

export default HeroPricing;
