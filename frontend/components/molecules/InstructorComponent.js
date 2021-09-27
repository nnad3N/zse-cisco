import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InstructorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25vw;
  color: ${({ theme }) => theme.colors.white};

  h4 {
    margin: 0.3rem 0;
  }

  &:nth-child(1) {
    margin-right: 2rem;
  }
`;

const ImageWrapper = styled.div`
  background-color: darkGray;
  width: 15rem;
  height: 15rem;
  margin-right: 4rem;
  border-radius: 50%;
`;

const InstructorComponent = ({ data }) => {
  const { header, instructor, description } = data;
  return (
    <Wrapper>
      <ImageWrapper />
      <InstructorWrapper>
        <h6>{header}</h6>
        <h4>{instructor}</h4>
        <p>{description}</p>
      </InstructorWrapper>
    </Wrapper>
  );
};

export default InstructorComponent;
