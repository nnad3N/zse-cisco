import React from 'react';
import styled from 'styled-components';
import InstructorComponent from '../molecules/InstructorComponent';

const InstructorsWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.dimensions.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

const HeroInstructors = ({ data }) => {
  console.log({ data });
  return (
    <InstructorsWrapper>
      {data.instructorComponent.map((instructorData) => (
        <InstructorComponent key={instructorData.id} data={instructorData} />
      ))}
    </InstructorsWrapper>
  );
};

export default HeroInstructors;
