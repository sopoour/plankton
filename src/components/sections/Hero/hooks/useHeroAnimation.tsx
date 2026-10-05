import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Breakpoints } from '@app/styles/media';
import { useMedia } from '@app/hooks/useMedia';

gsap.registerPlugin(ScrollTrigger);

const useHeroAnimation = () => {
  const isDesktopMd = useMedia(Breakpoints.md);
  const isDesktopSm = useMedia(Breakpoints.sm);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#intro',
          start: 0,
          end: () => window.innerHeight * 0.35,
          scrub: 0.6,
        },
      });

      const timelineSub = gsap.timeline({
        scrollTrigger: {
          trigger: '#intro',
          start: 0,
          end: () => window.innerHeight * 0.35,
          scrub: true,
        },
      });

      const introTl = gsap.timeline();

      introTl
        .fromTo(
          '.logo-letter',
          {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transformOrigin: '50% 50%',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            stagger: 0.2,
            ease: 'back.out(1.7)', // Bounce effect
          },
        )
        .fromTo(
          '#subtitle',
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.out',
          },
          { opacity: 1, y: 0 },
        )
        .fromTo(
          '#control-buttons',
          { opacity: 0, y: 20, duration: 0.3, ease: 'power2.out' },
          { opacity: 1, y: 0 },
        );

      timelineSub.to(
        '#subtitle',
        {
          opacity: 0,
          y: '-20vh',
          duration: 1,
        },
        0,
      );
      // move whole logo into sticky position on top
      timeline
        .to(
          '#logo',
          {
            duration: 3,
            y: '-42vh',
            scale: 0.45,
            xPercent: isDesktopSm ? 0 : '-50',
            ease: 'power2.out',
            zIndex: 5,
          },
          '-=0.6',
        )
        // show slowly the header
        .to(
          '#header',
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          isDesktopMd ? '-=0.3' : '-=0.1',
        );
    });

    return () => ctx.revert();
  }, [isDesktopMd, isDesktopSm]);
};

export default useHeroAnimation;
