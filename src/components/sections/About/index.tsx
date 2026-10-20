import { fetcher } from '@app/hooks/fetch/useFetch';
import ContentfulImage from '@app/lib/contentful-image';
import { Generell } from '@app/services/graphql/types';
import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import MarkdownConfig from '@app/components/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { subheader } from '@app/styles/fonts/fonts';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import { SectionHeader } from '@app/components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const BackgroundImageWrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  filter: brightness(0.6) blur(2px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.media('sm')`
    height: 100%;
    filter: brightness(1) blur();
    position: absolute;
  `}
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 3;
  margin: 0 auto;
  max-width: 100%;
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: unset;
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg.accentBlur};

  ${(props) => props.theme.media('sm')`
    padding: 40px 24px;
    max-width: 850px;
    height: max-content;
  `}
`;

const StatsGrid = styled.div`
  display: flex;
  row-gap: 8px;
  column-gap: 16px;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Value = styled.span`
  font-family: ${subheader.style.fontFamily};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent.green};
  text-transform: lowercase;
  font-weight: 700;
  text-shadow:
    0 0 4px rgba(0, 0, 0, 0.95),
    0 1px 8px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(10, 30, 15, 0.9),
    rgba(0, 180, 75, 0.6);
`;

const Markdown = styled(MarkdownConfig)`
  p {
    line-height: 1.75;
  }

  h2 {
    letter-spacing: -3%;
  }

  .marked {
    color: ${({ theme }) => theme.colors.accent.green};
  }
`;

const About: FC = () => {
  const { data, isLoading } = useSWR<Generell | null>('/api/generell', fetcher);
  const isDesktop = useMedia(Breakpoints.sm);
  return (
    <section
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <BackgroundImageWrapper>
        <ContentfulImage
          src={isDesktop ? data?.aboutBild?.url || '' : data?.aboutBildMobile?.url || ''}
          alt="Plankton Performance"
          fill
          sizes="(max-width: 768px) 100vw"
          id="bgImg"
        />
      </BackgroundImageWrapper>
      <ContentOverlay id="textContainer">
        <SectionHeader>&#47;&#47; ABOUT_US</SectionHeader>
        <Markdown content={data?.about as string} />
        <StatsGrid>
          {data?.aboutTag?.map((tag) => (
            <Value key={tag}>[{tag}]</Value>
          ))}
        </StatsGrid>
      </ContentOverlay>
    </section>
  );
};

export default About;
