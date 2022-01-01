import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFooter,
  FooterWrapper,
  ContentWrapper,
  InformationWrapper,
  StyledSchoolInfo,
  Line,
  ImagesWrapper,
  ImageWrapper,
} from './Footer.styles';
import Image from '@atoms/Image/Image';

const Footer = ({ footer: { header, schoolName, footerInfos, footerImages } }) => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <ContentWrapper>
          <h3>{header}</h3>
          <StyledSchoolInfo>{schoolName}</StyledSchoolInfo>
          <InformationWrapper>
            {footerInfos.map(({ id, caption, content }) => (
              <p key={id}>
                <span>{caption}</span> {content}
              </p>
            ))}
          </InformationWrapper>
        </ContentWrapper>
        <Line />
        <ImagesWrapper>
          {footerImages.data.map(({ attributes, id }) => (
            <ImageWrapper key={id}>
              <Image image={attributes} />
            </ImageWrapper>
          ))}
        </ImagesWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};

Footer.propTypes = {
  footer: PropTypes.shape({
    header: PropTypes.string,
    schoolName: PropTypes.string,
    footerInfos: PropTypes.arrayOf(PropTypes.object).isRequired,
    footerImages: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

Footer.defaultProps = {
  footer: {
    header: '',
    schoolName: '',
    footerInfos: [],
    footerImages: {
      data: [],
    },
  },
};

export default Footer;
