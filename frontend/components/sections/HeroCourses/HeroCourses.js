import React from 'react';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { HeroCourseWrapper, ContentWrapper, HeaderWrapper } from './HeroCourses.styles';

const HeroCourses = ({ data }) => {
  return (
    <HeroCourseWrapper>
      <HeaderWrapper>
        <LineHorizontal large>
          <h1>{data.title}</h1>
        </LineHorizontal>
      </HeaderWrapper>
      <ContentWrapper>
        {data.course.map((courseData) => (
          <HeroCourseComponent key={courseData.id} data={courseData} image={data.arrowImage} />
        ))}
      </ContentWrapper>
    </HeroCourseWrapper>
  );
};

export default HeroCourses;
