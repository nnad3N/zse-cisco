import NextImage from 'next/image';
import styled from 'styled-components';

export const NextImageWrapper = styled.div`
  height: max-content;
  width: 100%;
  filter: ${({ dark }) => (dark ? `brightness(0.85)` : `brightness(1)`)};
`;

export const StyledNextImage = styled(NextImage)`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
`;
