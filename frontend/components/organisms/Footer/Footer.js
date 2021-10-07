import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter, FooterWrapper, ContentWrapper, InformationWrapper, Line, ImagesWrapper, ImageWrapper } from './Footer.styles';

const Footer = (props) => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <h1>Kontakt:</h1>
        <ContentWrapper>
          <p>
            Zespół Szkół <br />
            Elektronicznych <br />w Radomiu
          </p>
          <InformationWrapper>
            <p>
              <span>tel:</span> 111-11-11
            </p>
            <p>
              <span>fax:</span> 111-11-11
            </p>
            <p>
              <span>mail:</span> 111-11-11
            </p>
          </InformationWrapper>
        </ContentWrapper>
        <Line />
        <ImagesWrapper>
          <ImageWrapper></ImageWrapper>
          <ImageWrapper></ImageWrapper>
        </ImagesWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
