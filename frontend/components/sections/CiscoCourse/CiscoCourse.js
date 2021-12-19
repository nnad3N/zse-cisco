import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import PageSection from '@templates/PageSection/PageSection';
import RichText from '@molecules/RichText/RichText';
import { StyledTitle, InfoSection, InfoWrapper, InfoComponent, StyledSpan } from './CiscoCourse.styles';

const CiscoCourse = ({ data: { richTextSections, courseInfos } }) => {
  return (
    <>
      <PageWrapper column>
        {richTextSections.map(({ header, content, id }) => (
          <PageSection key={id}>
            <LineVertical large>
              <StyledTitle>{header}</StyledTitle>
            </LineVertical>
            <RichText>{content}</RichText>
          </PageSection>
        ))}
      </PageWrapper>
      <InfoSection>
        <InfoWrapper>
          {courseInfos.map(({ caption, content, id }) => (
            <InfoComponent key={id}>
              <StyledSpan>{caption}</StyledSpan>
              <span>{content}</span>
            </InfoComponent>
          ))}
        </InfoWrapper>
      </InfoSection>
    </>
  );
};

CiscoCourse.propTypes = {
  data: PropTypes.shape({
    richTextSections: PropTypes.arrayOf(PropTypes.object),
    courseInfos: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

CiscoCourse.defaultProps = {
  data: {
    richText: [],
    courseInfo: [],
  },
};

export default CiscoCourse;
