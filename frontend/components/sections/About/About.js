import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { SectionWrapper, ContentWrapper, ImageWrapper, SectionDarkWrapper } from './About.styles';

const About = ({
  data: { secOneDescription, secOneTitle, secOneImage, secTwoDescription, secTwoTitle, secThreeTitle, secThreeImage, secThreeDescription },
}) => {
  return (
    <>
      <SectionWrapper>
        <ContentWrapper>
          <LineVertical large>
            <h1>{secOneTitle}</h1>
          </LineVertical>
          <p>{secOneDescription}</p>
        </ContentWrapper>
        <ImageWrapper>
          <Image image={secOneImage} priority />
        </ImageWrapper>
      </SectionWrapper>
      <SectionDarkWrapper>
        <LineVertical large>
          <h1>{secTwoTitle}</h1>
        </LineVertical>
        <p>{secTwoDescription}</p>
      </SectionDarkWrapper>
      <SectionWrapper>
        <ImageWrapper>
          <Image image={secThreeImage} />
        </ImageWrapper>
        <ContentWrapper reverse>
          <LineVertical large>
            <h1>{secThreeTitle}</h1>
          </LineVertical>
          <p>{secThreeDescription}</p>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    secOneTitle: PropTypes.string,
    secOneDescription: PropTypes.string,
    secOneImage: PropTypes.object,
    secTwoTitle: PropTypes.string,
    secTwoDescription: PropTypes.string,
    secThreeTitle: PropTypes.string,
    secThreeDescription: PropTypes.string,
    secThreeImage: PropTypes.object,
  }).isRequired,
};

About.defaultProps = {
  data: {
    // secOneTitle: '',
    secOneDescription: '',
    secTwoTitle: '',
    secTwoDescription: '',
    secThreeTitle: '',
    secThreeDescription: '',
  },
};

export default About;
