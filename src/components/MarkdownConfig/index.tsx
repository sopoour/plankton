import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { FC } from 'react';
import styled from 'styled-components';
import { header, text } from '@app/styles/fonts/fonts';

const MarkdownSettings = styled.div`
  color: ${({ theme }) => theme.colors.fg.default};

  li {
    line-height: 2;
  }

  img {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.accent.lila};
    text-decoration: none;

    &:hover {
      text-decoration: underline !important;
    }
  }

  p {
    font-size: 16px;

    ${({ theme }) => theme.media('sm')`
        font-size: 20px;
    `}
  }

  h1 {
    font-size: 36px;
    font-family: ${header.style.fontFamily}, sans-serif;
    font-weight: 300;

    ${({ theme }) => theme.media('sm')`
        font-size: 28px;
    `}
  }

  h2 {
    font-family: ${header.style.fontFamily};
    font-size: 32px;
    font-weight: 300;

    ${({ theme }) => theme.media('sm')`
        font-size: 56px;
    `}
  }
`;

type Props = {
  content: string;
  className?: string;
};

const MarkdownConfig: FC<Props> = ({ content, className }) => {
  return (
    <MarkdownSettings className={className}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
        skipHtml={false}
      >
        {content}
      </Markdown>
    </MarkdownSettings>
  );
};

export default MarkdownConfig;
