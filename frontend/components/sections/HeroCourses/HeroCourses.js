import React from 'react';
import PropTypes from 'prop-types';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { HeroCourseWrapper, ContentWrapper } from './HeroCourses.styles';

const HeroCourses = ({ data: { title, courses, arrowImage } }) => {
  return (
    <HeroCourseWrapper>
      <LineHorizontal large>
        <h1>{title}</h1>
      </LineHorizontal>
      <ContentWrapper>
        {courses.map((courseData) => (
          <HeroCourseComponent key={courseData.id} data={courseData} image={arrowImage} />
        ))}
      </ContentWrapper>
    </HeroCourseWrapper>
  );
};

HeroCourses.propTypes = {
  data: PropTypes.shape({
    arrowImage: PropTypes.object,
    courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

HeroCourses.defaultProps = {
  data: {
    courses: [],
  },
};

export default HeroCourses;
