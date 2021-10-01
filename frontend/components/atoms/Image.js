import { getStrapiMedia } from '/utils/media';
import NextImage from 'next/image';
import styled from 'styled-components';

const NextImageWrapper = styled.div`
  height: max-content;
  width: 100%;
`;

const StyledNextImage = styled(NextImage)`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
`;

const Image = ({ image }) => {
  const { url, alternativeText, width, height } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <NextImageWrapper>
      <StyledNextImage loader={loader} layout="responsive" width={width} height={height} src={url} alt={alternativeText || ''} />
    </NextImageWrapper>
  );
};

export default Image;
