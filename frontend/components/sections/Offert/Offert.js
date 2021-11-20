import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import PageHeader from '@templates/PageHeader/PageHeader';
import PageSection from '@templates/PageSection/PageSection';
import LineVertical from '@atoms/LineVertical/LineVertical';
import RichText from '@molecules/RichText/RichText';
import PageTileWrapper from '@templates/PageTileWrapper/PageTileWrapper';
import PageTile from '@templates/PageTile/PageTile';
import ArrowLink from '@atoms/ArrowLink/ArrowLink';
import { StyledTitle, StyledSpan } from './Offert.styles';

const Offert = ({
  data: {
    sectionHeader: { title, image },
    offertComponents,
    arrowImage,
  },
}) => {
  return (
    <>
      <PageHeader image={image}>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
      </PageHeader>
      <PageWrapper short column>
        {offertComponents.map(({ title, content, offertCourses, id }) => (
          <PageSection key={id}>
            <LineVertical large>
              <StyledTitle>{title}</StyledTitle>
            </LineVertical>
            <RichText>{content}</RichText>
            <PageTileWrapper>
              {offertCourses.map(({ title, description, linkName, link: { slug }, id }) => (
                <PageTile key={id}>
                  <LineVertical>
                    <h4>{title}</h4>
                  </LineVertical>
                  <StyledSpan>{description}</StyledSpan>
                  <ArrowLink accented slug={slug} title={linkName} image={arrowImage} />
                </PageTile>
              ))}
            </PageTileWrapper>
          </PageSection>
        ))}
      </PageWrapper>
    </>
  );
};

Offert.propTypes = {
  data: PropTypes.shape({
    sectionHeader: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.object,
    }),
    offertComponents: PropTypes.arrayOf(PropTypes.object),
    arrowImage: PropTypes.object,
  }).isRequired,
};

Offert.defaultProps = {
  data: {
    sectionHeader: {
      title: '',
    },
    offertComponents: [],
  },
};

export default Offert;
