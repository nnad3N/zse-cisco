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
import {
  StyledTitle,
  InfoSection,
  InfoWrapper,
  InfoComponent,
  StyledSpan,
  ImageWrapper,
  StyledList,
  StyledItem,
  PageTileWrapper,
  StyledTileHeader,
} from './CiscoCourse.styles';

const CiscoCourse = ({
  data: {
    header: { title, image },
    richText,
    iconInfo,
    listTitle,
    listComponent,
  },
}) => {
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
                    <ListItem long key={id}>
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

CiscoCourse.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.object,
    }),
    richText: PropTypes.arrayOf(PropTypes.object),
    iconInfo: PropTypes.arrayOf(PropTypes.object),
    listTitle: PropTypes.string,
    listComponent: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

CiscoCourse.defaultProps = {
  data: {
    header: {
      title: '',
    },
    richText: [],
    iconInfo: [],
    listTitle: '',
    listComponent: [],
  },
};

export default CiscoCourse;
