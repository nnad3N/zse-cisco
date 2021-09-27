import React from 'react';
import styled from 'styled-components';
import HeroCourseComponent from '../molecules/HeroCourseComponent';

const HeroCourseWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-row-gap: 10vh;
  justify-items: center;
  padding: 10vh ${({ theme }) => theme.dimensions.padding};

  h1 {
    grid-row: 1/2;
    grid-column: 1/3;
  }
`;

const HeroCourses = ({ data }) => {
  console.log(data);
  return (
    <HeroCourseWrapper>
      <h1>{data.title}</h1>
      {data.course.map((courseData) => (
        <HeroCourseComponent key={courseData.id} data={courseData} />
      ))}
    </HeroCourseWrapper>
  );
};

export default HeroCourses;
