import React from 'react';
import PropTypes from 'prop-types';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { HeroCourseWrapper, ContentWrapper } from './HeroCourses.styles';

const HeroCourses = ({ data: { header, courses, linkCaption } }) => {
  return (
    <HeroCourseWrapper>
      <LineHorizontal large>
        <h1>{header}</h1>
      </LineHorizontal>
      <ContentWrapper>
        {courses.map((course) => (
          <HeroCourseComponent key={course.id} data={course} linkCaption={linkCaption} />
        ))}
      </ContentWrapper>
    </HeroCourseWrapper>
  );
};

HeroCourses.propTypes = {
  data: PropTypes.shape({
    courses: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
    header: PropTypes.string,
    link: PropTypes.object,
  }).isRequired,
};

HeroCourses.defaultProps = {
  data: {
    courses: [],
    header: '',
    link: {},
  },
};

export default HeroCourses;
