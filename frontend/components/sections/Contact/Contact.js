import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { ContentWrapper, AddressWrapper, InformationWrapper } from './Contact.styles';

const Contact = ({ data: { title, schoolName, contactInfo } }) => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <LineVertical large>
          <h1>{title}</h1>
        </LineVertical>
        <AddressWrapper>
          <h4>{schoolName}</h4>
        </AddressWrapper>
        <InformationWrapper>
          {contactInfo.map(({ id, caption, info }) => (
            <p key={id}>
              <span>{caption}</span> {info}
            </p>
          ))}
        </InformationWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    address: PropTypes.string,
    schoolName: PropTypes.string,
    contactInfo: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

Contact.defaultProps = {
  data: {
    title: '',
    address: '',
    schoolName: '',
    contactInfo: [],
  },
};

export default Contact;
