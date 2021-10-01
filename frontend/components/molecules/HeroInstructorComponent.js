import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InstructorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  h4 {
    margin-bottom: 1rem;
  }

  &:nth-child(1) {
    margin-right: 2rem;
  }
`;

const ImageWrapper = styled.div`
  background-color: darkGray;
  min-width: 17rem;
  min-height: 17rem;
  margin-right: 4rem;
  border-radius: 50%;
`;

const HeroInstructorComponent = ({ data }) => {
  const { header, instructor, description } = data;
  return (
    <Wrapper>
      <ImageWrapper />
      <InstructorWrapper>
        <h5>{header}</h5>
        <h4>{instructor}</h4>
        <p>{description}</p>
      </InstructorWrapper>
    </Wrapper>
  );
};

export default HeroInstructorComponent;
