import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import LineVertical from '../atoms/LineVertical';

const HeroAcademyWrapper = styled.section`
  padding: 10vh 0 10vh ${({ theme }) => theme.dimensions.paddingNarrow};
  display: grid;
  column-gap: 20rem;
  row-gap: 4rem;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
`;

const HeaderWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
`;

const DescriptionWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.dimensions.heroAcademyPadding};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};

  p {
    margin-bottom: 4rem;
  }
`;

const ImageWrapper = styled.div`
  width: 40vw;
  height: 50vh;
  background-color: darkGray;
  justify-self: end;
`;

const HeroAcademy = ({ data }) => {
  const { title, description, button } = data;
  return (
    <HeroAcademyWrapper>
      <HeaderWrapper>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
      </HeaderWrapper>
      <DescriptionWrapper>
        <p>{description}</p>
        <Button data={button} />
      </DescriptionWrapper>
      <ImageWrapper />
    </HeroAcademyWrapper>
  );
};

export default HeroAcademy;
