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
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import { flexColumn, flexRow } from '@app/styles/mixins';
import Concerts from '@app/components/sections/Concerts';

gsap.registerPlugin(ScrollTrigger);

const Root = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const OuterWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  z-index: 1;

  ${(props) => props.theme.media('sm')`
    height: 450vh; // give the area room to scroll at least twice of a section
  `}
`;

const Viewport = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
  ${flexColumn};
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.media('sm')`
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    perspective: 1000px;
    ${flexRow};
  `}
`;

const Home: NextPage = () => {
  const { data, isLoading } = useSWR<Video[] | null>('/api/videos', fetcher);
  const isDesktop = useMedia(Breakpoints.sm);

  useEffect(() => {
    if (isLoading) return;
    if (isDesktop) {
      const ctx = gsap.context(() => {
        // Timeline über den gesamten Scroll-Weg der äußeren Sektion
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#outerwrapper',
            start: 'top 10%',
            end: 'bottom bottom', // Nutzt die volle Höhe von OuterWrapper (300vh)
            endTrigger: '#concerts', // important so that the next section goes over it
            scrub: 1,
            pin: '#pinned-section',
            pinSpacing: true,
          },
        });

        const videoCards = gsap.utils.toArray<HTMLElement>('.video-card');

        // ABOUT
        tl.fromTo(
          '#bgImg',
          { filter: 'brightness(1) blur()' },
          {
            scale: 1.1,
            filter: 'brightness(0.6) blur(2px)',
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
              y: isDesktop ? -20 : -30,
              duration: 1,
              ease: 'power2.out',
            },
          )
          .to('#textContainer', { y: -120, autoAlpha: 0, duration: 1, ease: 'power2.out' })

          // VIDEOS
          .to('#bgImg', { filter: 'brightness(0.3) blur(8px)', scale: 0.7, duration: 1 })
          .fromTo(
            '#videos-header',
            { y: 50, autoAlpha: 0, duration: 0.5 },
            { y: 0, autoAlpha: 1, duration: 0.5 },
          );

        videoCards.forEach((card, index) => {
          const isLeft = index % 3 === 0;
          const isMiddle = index % 3 === 1;

          const initialX = isLeft ? -150 : isMiddle ? 0 : 150;
          const initialY = isMiddle ? -150 : -120;
          const initialRotation = isLeft ? -12 : isMiddle ? 0 : 12;

          tl.fromTo(
            card,
            {
              xPercent: initialX,
              yPercent: initialY,
              rotation: initialRotation,
              scale: isMiddle ? 0.6 : 1,
              opacity: 0,
            },
            {
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              scale: isMiddle ? 1.1 : 0.9,
              opacity: 1,
              duration: 1.5,
              ease: 'power3.out',
            },
            // Das erste Video startet leicht überlappend mit dem Bg-Scale (-=1),
            // alle nachfolgenden fliegen kurz verzögert hinterher (<0.3)
            index === 0 ? '-=1' : '<0.8',
          );
        });

        //PUFFER: Staying with videos for a bit
        tl.to('#videos', {
          duration: 1.5,
        });
      });

      return () => ctx.revert();
    }
  }, [isLoading, isDesktop]);

  return (
    <Root>
      <Hero />
      <OuterWrapper id="outerwrapper">
        <Viewport id="pinned-section">
          <About />
          <Videos videos={data} />
        </Viewport>
      </OuterWrapper>
      <Concerts />
    </Root>
  );
};

export default Home;
