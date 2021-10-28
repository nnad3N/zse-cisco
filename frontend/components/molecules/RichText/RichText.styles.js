import Markdown from 'react-markdown';
import styled from 'styled-components';

export const StyledMarkdown = styled(Markdown)`
  margin-top: ${({ theme }) => theme.dimensions.richTextMarginTop};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.black};
  }

  h1,
  h2 {
    font-weight: 300;
  }

  h3,
  h4,
  h5 {
    font-weight: 400;
  }

  h1 {
    font-size: 9.5rem;
    letter-spacing: -0.15rem;
  }

  h2 {
    font-size: 5.9rem;
    letter-spacing: -0.05rem;
  }

  h3 {
    font-size: 4.8rem;
  }

  h4 {
    font-size: 3.4rem;
    letter-spacing: 0.025rem;
  }

  h5 {
    font-size: 2.4rem;
  }

  h6 {
    font-size: 2rem;
    letter-spacing: 0.015rem;
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    font-weight: 400;

    &:visited {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  li {
    a {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSize.body};

      &:visited {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  p {
    &:not(:last-child) {
      margin: 0 0 1rem 0;
    }
  }
`;
