import About from '@app/components/sections/About';
import Hero from '@app/components/sections/Hero';
import Videos from '@app/components/sections/Videos';
import { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useSWR from 'swr';
import { Video } from '@app/services/graphql/types';
import { fetcher } from '@app/hooks/fetch/useFetch';

gsap.registerPlugin(ScrollTrigger);

const Root = styled.span`
  display: flex;
  flex-direction: column;
`;

const OuterWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 350vh; // give the area room to scroll at least twice of a section
  z-index: 2;
`;

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
  perspective: 1000px;
`;

const Home: NextPage = () => {
  const { data, isLoading } = useSWR<Video[] | null>('/api/videos', fetcher);
  useEffect(() => {
    if (isLoading) return;
    const ctx = gsap.context(() => {
      // Timeline über den gesamten Scroll-Weg der äußeren Sektion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#outerwrapper',
          start: 'top 10%',
          end: 'bottom bottom', // Nutzt die volle Höhe von OuterWrapper (300vh)
          scrub: 1,
          pin: '#pinned-section',
        },
      });

      tl.fromTo(
        '#bgImg',
        { filter: 'brightness(1) blur()' },
        {
          scale: 1.1,
          filter: 'brightness(0.75) blur(2px)',
          duration: 1.2,
          ease: 'none',
        },
      )
        .fromTo(
          '#textContainer',
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
        .to('#textContainer', { y: -120, autoAlpha: 0, duration: 1, ease: 'power2.out' })
        .to('#bgImg', { filter: 'brightness(0.3) blur(8px)', scale: 0.7, duration: 1 })
        .fromTo(
          '#video-card-0',
          { xPercent: -150, yPercent: -120, rotation: -12, opacity: 0 },
          { xPercent: 0, yPercent: 0, rotation: 0, opacity: 1, duration: 1.5 },
          '-=1',
        )
        .fromTo(
          '#video-card-1',
          { yPercent: -150, scale: 0.6, opacity: 0 },
          { yPercent: 0, scale: 1, opacity: 1, duration: 1.5 },
          '-=0.5',
        )
        .fromTo(
          '#video-card-2',
          { xPercent: 150, yPercent: -120, rotation: 12, opacity: 0 },
          { xPercent: 0, yPercent: 0, rotation: 0, opacity: 1, duration: 1.5 },
          '-=0.5',
        );
    });

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <Root>
      <Hero />
      <OuterWrapper id="outerwrapper">
        <Viewport id="pinned-section">
          <About />
          <Videos videos={data} />
        </Viewport>
      </OuterWrapper>
    </Root>
  );
};

export default Home;
