import { getStrapiMedia } from '/utils/media';
import NextImage from 'next/image';
import styled from 'styled-components';

const NextImageWrapper = styled.div`
  height: max-content;
  width: 100%;
`;

const StyledNextImage = styled(NextImage)`
  border-radius: ${({ theme, radius }) => (radius ? theme.utils.borderRadius : 0)};
`;

const Image = ({ image, hasRadius }) => {
  const { url, alternativeText, width, height } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <NextImageWrapper hasRadius={hasRadius}>
      <StyledNextImage radius={hasRadius} loader={loader} layout="responsive" width={width} height={height} src={url} alt={alternativeText || ''} />
    </NextImageWrapper>
  );
};

export default Image;
