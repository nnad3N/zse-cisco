import React from 'react';
import styled from 'styled-components';
import ArrowLink from '../atoms/ArrowLink';

const HeroCourseComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.dimensions.heroCoursePadding};
  max-width: 46rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  position: relative;

  h4 {
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }
`;

const ImageWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position: absolute;
  background-color: darkGray;
  transform: translate(-90%, -65%);
`;

const HeroCourseComponent = ({ data }) => {
  console.log(data);
  const { title, description, link, linkTitle } = data;
  return (
    <HeroCourseComponentWrapper>
      <ImageWrapper />
      <h4>{title}</h4>
      <p small>{description}</p>
      <ArrowLink data={link} title={linkTitle} />
    </HeroCourseComponentWrapper>
  );
};

export default HeroCourseComponent;
