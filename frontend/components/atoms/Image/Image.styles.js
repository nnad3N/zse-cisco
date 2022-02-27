import NextImage from 'next/image';
import styled from 'styled-components';

export const NextImageWrapper = styled.div`
  height: max-content;
  width: 100%;
  filter: ${({ dark }) => (dark ? `brightness(0.85)` : `brightness(1)`)};

  span {
    span {
      display: unset !important;
      padding: 0 !important;
    }
  }
`;

export const StyledNextImage = styled(NextImage)`
  position: relative !important;
  height: auto !important;
  width: auto !important;
  border-radius: ${({ theme }) => theme.utils.borderRadius};
`;
