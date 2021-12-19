import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import PageSection from '@templates/PageSection/PageSection';
import LineVertical from '@atoms/LineVertical/LineVertical';
import RichText from '@molecules/RichText/RichText';
import PageTileWrapper from '@templates/PageTileWrapper/PageTileWrapper';
import PageTile from '@templates/PageTile/PageTile';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import { StyledTitle, StyledSpan } from './Courses.styles';

const Courses = ({ data: { header, content, courses, linkCaption, sectionId } }) => {
  return (
    <PageWrapper id={sectionId} short column modular>
      <PageSection>
        <LineVertical large>
          <StyledTitle>{header}</StyledTitle>
        </LineVertical>
        <RichText>{content}</RichText>
        <PageTileWrapper>
          {courses.map(({ header, description, url, id }) => (
            <PageTile key={id}>
              <LineVertical>
                <h4>{header}</h4>
              </LineVertical>
              <StyledSpan>{description}</StyledSpan>
              <ArrowLink accented url={url} text={linkCaption} />
            </PageTile>
          ))}
        </PageTileWrapper>
      </PageSection>
    </PageWrapper>
  );
};

Courses.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string,
    linkCaption: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.object),
    sectionId: PropTypes.string,
  }).isRequired,
};

Courses.defaultProps = {
  data: {
    header: '',
    content: '',
    linkCaption: '',
    courses: [],
    sectionId: '',
  },
};

export default Courses;
