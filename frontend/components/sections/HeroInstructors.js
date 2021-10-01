import React from 'react';
import styled from 'styled-components';
import HeroInstructorComponent from '../molecules/HeroInstructorComponent';

const InstructorsWrapper = styled.section`
  padding: 5rem ${({ theme }) => theme.dimensions.padding};
  display: grid;
  grid-template-columns: auto auto;
  column-gap: ${({ theme }) => theme.dimensions.paddingNarrow};
  align-items: center;
  justify-content: space-between;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

const HeroInstructors = ({ data }) => {
  return (
    <InstructorsWrapper>
      {data.instructorComponent.map((instructorData) => (
        <HeroInstructorComponent key={instructorData.id} data={instructorData} />
      ))}
    </InstructorsWrapper>
  );
};

export default HeroInstructors;
