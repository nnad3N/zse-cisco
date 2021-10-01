import React from 'react';
import styled from 'styled-components';
import HeroCourseComponent from '../molecules/HeroCourseComponent';
import LineHorizontal from '../atoms/LineHorizontal';

const HeroCourseWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  column-gap: ${({ theme }) => theme.dimensions.paddingNarrow};
  row-gap: 15vh;
  justify-items: center;
  padding: 10vh ${({ theme }) => theme.dimensions.paddingNarrow};
`;

const HeaderWrapper = styled.div`
  text-align: center;
  width: 100%;
  grid-row: 1/2;
  grid-column: 1/3;
`;

const HeroCourses = ({ data }) => {
  return (
    <HeroCourseWrapper>
      <HeaderWrapper>
        <LineHorizontal large>
          <h1>{data.title}</h1>
        </LineHorizontal>
      </HeaderWrapper>
      {data.course.map((courseData) => (
        <HeroCourseComponent key={courseData.id} data={courseData} />
      ))}
    </HeroCourseWrapper>
  );
};

export default HeroCourses;
