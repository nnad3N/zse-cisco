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
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.7rem;
  }

  h1,
  h2 {
    font-weight: 300;
    margin-top: 2rem;
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
    font-size: 2.5rem;
    font-weight: 400;
  }

  h4 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 2rem;
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
    font-size: ${({ theme }) => theme.fontSize.body};
    margin-left: 3rem;
    line-height: 1.6;

    &:first-child {
      margin-top: 0.8rem;
    }

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
