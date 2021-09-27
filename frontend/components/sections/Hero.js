import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

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
  max-width: ${({ theme }) => `calc(50vw - ${theme.dimensions.padding})`};
`;

const Header = styled.h1`
  max-width: 40rem;
`;

const SubHeader = styled.h2`
  margin: 4rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 40vw;
  height: 50vh;
  background-color: darkGray;
`;

const Hero = ({ data }) => {
  const { title, description, button } = data;

  return (
    <HeroWrapper>
      <ContentWrapper>
        <Header>{title}</Header>
        <SubHeader>{description}</SubHeader>
        <ButtonWrapper>
          {button.map((buttonData) => (
            <Button key={buttonData.id} data={buttonData} hasMargin />
          ))}
        </ButtonWrapper>
      </ContentWrapper>
      <ImageWrapper />
    </HeroWrapper>
  );
};

export default Hero;
