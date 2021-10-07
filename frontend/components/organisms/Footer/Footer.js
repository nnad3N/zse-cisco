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

const Footer = ({ footer: { header, schoolName, footerInfo, footerImages } }) => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <h1>{header}</h1>
        <ContentWrapper>
          <StyledSchoolInfo>{schoolName}</StyledSchoolInfo>
          <InformationWrapper>
            {footerInfo.map(({ id, caption, info }) => (
              <p key={id}>
                <span>{caption}</span> {info}
              </p>
            ))}
          </InformationWrapper>
        </ContentWrapper>
        <Line />
        <ImagesWrapper>
          {footerImages.map((footerImage) => (
            <ImageWrapper key={footerImage.id}>
              <Image image={footerImage} />
            </ImageWrapper>
          ))}
        </ImagesWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
