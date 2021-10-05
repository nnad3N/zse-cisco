import styled from 'styled-components';

export const HeroCourseComponentWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.dimensions.heroCoursePadding};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  position: relative;
  max-width: 50rem;

  &:nth-child(odd) {
    justify-self: end;
  }

  &:nth-child(even) {
    justify-self: start;
  }

  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    margin-top: 4rem;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.cardPaddingMobile};
  }
`;

export const ImageWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position: absolute;
  background-color: darkGray;
  transform: translate(-90%, -65%);

  ${({ theme }) => theme.mq.mobileLarge} {
    transform: translate(-45%, -65%);
  }

  ${({ theme }) => theme.mq.mobileMedium} {
    height: 9.5rem;
    width: 9.5rem;
    transform: translate(-40%, -65%);
  }

  ${({ theme }) => theme.mq.mobileSmall} {
    height: 8rem;
    width: 8rem;
    transform: translate(-45%, -65%);
  }
`;
