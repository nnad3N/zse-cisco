import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '@templates/PageHeader/PageHeader';
import LineVertical from '@atoms/LineVertical/LineVertical';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import PageSection from '@templates/PageSection/PageSection';
import RichText from '@molecules/RichText/RichText';
import Image from '@atoms/Image/Image';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import PageTile from '@templates/PageTile/PageTile';
import ListItem from '@molecules/ListItem/ListItem';

import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headerMobile};
`;

const InfoSection = styled.section`
  padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.m};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  ${({ theme }) => theme.mq.laptopLarge} {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InfoComponent = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  &:not(:last-child) {
    margin-right: 8rem;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.captionLargeMedium};
  }

  ${({ theme }) => theme.mq.laptopLarge} {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4rem;
    }
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  font-weight: 600;
  margin-right: 0.6rem;
`;

const ImageWrapper = styled.div`
  width: 7rem;
  margin-right: 3rem;
`;

const StyledList = styled.ul`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSize.body};
`;

const StyledItem = styled.span`
  inline-size: 40rem;
  overflow-wrap: break-word;

  ${({ theme }) => theme.mq.mobileLarge} {
    inline-size: 100%;
  }
`;

const PageTileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }) => theme.mq.laptopLarge} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTileHeader = styled.h4`
  ${({ theme }) => theme.mobileLarge} {
    max-width: 75%;
  }
`;

const CiscoCourse = ({ data }) => {
  console.log(data);
  const {
    header: { title, image },
    richText,
    iconInfo,
    listTitle,
    listComponent,
  } = data;
  return (
    <div>
      <PageHeader image={image}>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
      </PageHeader>
      <PageWrapper column>
        {richText.map(({ title, content, id }) => (
          <PageSection key={id}>
            <LineVertical large>
              <StyledTitle>{title}</StyledTitle>
            </LineVertical>
            <RichText>{content}</RichText>
          </PageSection>
        ))}
      </PageWrapper>
      <InfoSection>
        <InfoWrapper>
          {iconInfo.map(({ caption, value, icon, id }) => (
            <InfoComponent key={id}>
              <ImageWrapper>
                <Image image={icon} />
              </ImageWrapper>
              <StyledSpan>{caption}</StyledSpan>
              <span>{value}</span>
            </InfoComponent>
          ))}
        </InfoWrapper>
      </InfoSection>
      <PageWrapper short>
        <PageSection wide>
          <LineHorizontal large>
            <h1>{listTitle}</h1>
          </LineHorizontal>
          <PageTileWrapper>
            {listComponent.map(({ title, listItems, id }) => (
              <PageTile wide key={id}>
                <LineVertical>
                  <StyledTileHeader>{title}</StyledTileHeader>
                </LineVertical>
                <StyledList>
                  {listItems.map(({ item, id }) => (
                    <ListItem wrap key={id}>
                      <StyledItem>{item}</StyledItem>
                    </ListItem>
                  ))}
                </StyledList>
              </PageTile>
            ))}
          </PageTileWrapper>
        </PageSection>
      </PageWrapper>
    </div>
  );
};

CiscoCourse.propTypes = {};

export default CiscoCourse;
