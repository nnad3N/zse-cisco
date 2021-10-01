import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import LineVertical from '../atoms/LineVertical';
import Image from '../atoms/Image';

const HeroWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.dimensions.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => `calc(40vw - ${theme.dimensions.padding})`};

  h1 {
    max-width: 40rem;
    margin-bottom: 4rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const ImageWrapper = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = ({ data }) => {
  const { title, description, button, image } = data;

  return (
    <HeroWrapper>
      <ContentWrapper>
        <h1>{title}</h1>
        <LineVertical>
          <h2>{description}</h2>
        </LineVertical>
        <ButtonWrapper>
          {button.map((buttonData) => (
            <Button key={buttonData.id} data={buttonData} hasMargin />
          ))}
        </ButtonWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Image image={image} />
      </ImageWrapper>
    </HeroWrapper>
  );
};

export default Hero;
