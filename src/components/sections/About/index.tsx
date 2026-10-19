import Section from '@app/components/layout/Section';
import { fetcher } from '@app/hooks/fetch/useFetch';
import ContentfulImage from '@app/lib/contentful-image';
import { Generell } from '@app/services/graphql/types';
import { flexRow } from '@app/styles/mixins';
import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { VisuallyHidden } from '@mantine/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import MarkdownConfig from '@app/components/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { subheader } from '@app/styles/fonts/fonts';

gsap.registerPlugin(ScrollTrigger);

const OuterWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 250vh; // give the area room to scroll at least twice of a section
`;

// Having a 100vh viewport that is sticky
const Viewport = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImageWrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 3;
  margin: 0 auto;
  max-width: 100%;
  padding: 32px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: unset;
  opacity: 0;
  visibility: hidden;
  background-color: ${({ theme }) => theme.colors.bg.accentBlur};

  ${(props) => props.theme.media('sm')`
    padding: 40px 24px;
    max-width: 850px;
  `}
`;

const Subheader = styled(Typography)`
  font-family: ${subheader.style.fontFamily};
  color: ${({ theme }) => theme.colors.accent.green};
  font-size: 16px;
  font-weight: 700;
`;

const StatsGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

const Value = styled.span`
  font-family: ${subheader.style.fontFamily};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent.green};
  text-shadow:
    0 0 5px rgba(0, 255, 102, 0.8),
    0 0 15px rgba(0, 255, 102, 0.5),
    0 0 30px rgba(0, 255, 102, 0.3);
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

  const outerWrapperRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline über den gesamten Scroll-Weg der äußeren Sektion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerWrapperRef.current,
          start: 'top 7%',
          end: 'bottom bottom', // Nutzt die volle Höhe von OuterWrapper (300vh)
          scrub: 1,
          pin: '.pinned-viewport',
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        bgImageRef.current,
        { filter: 'brightness(1) blur()' },
        {
          scale: 1.1,
          filter: 'brightness(0.75) blur(2px)',
          duration: 1.2,
          ease: 'none',
        },
      )
        .fromTo(
          textContentRef.current,
          {
            autoAlpha: 0,
            y: 120,
          },
          {
            autoAlpha: 1,
            y: -10,
            duration: 1,
            ease: 'power2.out',
          },
        )
        .to({}, { duration: 0.5 })
        .to(textContentRef.current, { y: -120, autoAlpha: 0, duration: 1, ease: 'power2.out' })
        .to(bgImageRef.current, { filter: 'brightness(1) blur()', scale: 1, duration: 1 });
    }, outerWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <OuterWrapper ref={outerWrapperRef}>
      <Viewport className="pinned-viewport">
        <BackgroundImageWrapper>
          <ContentfulImage
            src={data?.aboutBild?.url || ''}
            alt="Plankton Performance"
            fill
            sizes="(max-width: 768px) 100vw"
            ref={bgImageRef}
          />
        </BackgroundImageWrapper>
        <ContentOverlay ref={textContentRef}>
          <Subheader>// ABOUT_US</Subheader>
          <Markdown content={data?.about as string} />
          <StatsGrid>
            {data?.aboutTag?.map((tag) => (
              <Value key={tag}>[{tag}]</Value>
            ))}
          </StatsGrid>
        </ContentOverlay>
      </Viewport>
    </OuterWrapper>
  );
};

export default About;
