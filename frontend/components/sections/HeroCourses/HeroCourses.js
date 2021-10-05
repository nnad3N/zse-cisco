import React from 'react';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { HeroCourseWrapper, HeaderWrapper } from './HeroCourses.styles';

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
