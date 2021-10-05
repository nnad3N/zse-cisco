import NextImage from 'next/image';
import styled from 'styled-components';

export const NextImageWrapper = styled.div`
  height: max-content;
  width: 100%;
`;

export const StyledNextImage = styled(NextImage)`
  border-radius: ${({ theme, radius }) => (radius ? theme.utils.borderRadius : 0)};
`;
