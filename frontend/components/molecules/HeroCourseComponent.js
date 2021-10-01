import React from 'react';
import styled from 'styled-components';
import ArrowLink from '../atoms/ArrowLink';
import LineVertical from '../atoms/LineVertical';

const HeroCourseComponentWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.dimensions.heroCoursePadding};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  position: relative;

  &:nth-child(odd) {
    justify-self: end;
  }

  &:nth-child(even) {
    justify-self: start;
  }

  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    margin-top: 4rem;
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
  const { title, description, link, linkTitle } = data;
  return (
    <HeroCourseComponentWrapper>
      <ImageWrapper />
      <h4>{title}</h4>
      <LineVertical>
        <p>{description}</p>
      </LineVertical>
      <ArrowLink data={link} title={linkTitle} />
    </HeroCourseComponentWrapper>
  );
};

export default HeroCourseComponent;
