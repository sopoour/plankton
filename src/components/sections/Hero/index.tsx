import { fetcher } from '@app/hooks/fetch/useFetch';
import { Generell } from '@app/services/graphql/types';
import { FC, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import {
  BackgroundVideo,
  ContentContainer,
  ControlButton,
  ControlsContainer,
  Logo,
  Subtitle,
} from './styles';
import { FaVolumeMute, FaVolumeUp, FaPause, FaPlay } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import Section from '@app/components/layout/Section';
import useHeroAnimation from './hooks/useHeroAnimation';

const Hero: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const { data, isLoading } = useSWR<Generell | null>('/api/generell', fetcher);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    const nextMuteState = !isMuted;
    setIsMuted(!isMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuteState;
      gsap.to(videoRef.current, {
        filter: nextMuteState ? 'brightness(0.5)' : 'brightness(1)',
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }

    gsap.to('#intro', {
      opacity: nextMuteState ? 1 : 0,
      pointerEvents: nextMuteState ? 'auto' : 'none',
      duration: 0.8,
      ease: 'power2.inOut',
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay blockiert oder fehlgeschlagen:', err);
        setIsPlaying(false);
      });
    }
  }, []);
  const isDesktopSm = useMedia(Breakpoints.sm);
  useHeroAnimation();

  return (
    <Section style={{ padding: 0 }}>
      <>
        {data?.heroVideo && (
          <BackgroundVideo ref={videoRef} autoPlay loop muted playsInline>
            <source src={data?.heroVideo?.url || ''} type="video/mp4" />
            Ihr Browser unterstützt kein HTML5-Video.
          </BackgroundVideo>
        )}
        <ContentContainer id="intro">
          <Logo
            width={isDesktopSm ? 639 : 639 / 2}
            height={isDesktopSm ? 69 : 69 / 2}
            viewBox="0 0 639 69"
            fill="none"
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="logo-letter"
              d="M6.10352e-05 0H34.6945V13.56H13.9207V27.72H34.6945V41.76H13.9207V69H6.10352e-05V0ZM74.2076 33.6V8.28L61.6791 0H39.5132V13.56H60.287V27.72H39.5132V41.76H61.6791L74.2076 33.6Z"
              fill="#1CBB6E"
            />
            <path
              className="logo-letter"
              d="M79.1542 0H92.6465V54.96H110.575V69H79.1542V0ZM118.667 54.96V69H149.838L144.93 54.96H118.667Z"
              fill="#1CBB6E"
            />
            <path
              className="logo-letter"
              d="M154.552 8.28V69H168.045V41.4L185.117 27.72L168.045 13.56H179.316L188.818 0H166.76L154.552 8.28ZM228.332 8.28V69H214.839V41.4L197.163 28L214.839 13.56H201.179L193.637 0H215.696L228.332 8.28Z"
              fill="#1CBB6E"
            />
            <path
              className="logo-letter"
              d="M238.567 0H250.774L270.259 19.5L272.833 41.4L252.059 18.96V69H238.567V0ZM298.854 49.56V0H312.346V69H299.711L277.652 45.24L274.721 23L298.854 49.56Z"
              fill="#1CBB6E"
            />
            <path
              className="logo-letter"
              d="M320.727 0V69H334.22V41.4H338.017L340.216 27.72H334.22V0H320.727ZM354.993 34.56L394.507 62.16L381.871 69L342.032 41.4L344.178 27.72L381.871 0L394.507 6.84L354.993 34.56Z"
              fill="#1CBB6E"
            />
            <path
              className="logo-letter"
              d="M475.551 13.56L442.744 8.28L444.711 69H429.934L433.821 8.28L401.771 13.56V0H475.551V13.56Z"
              fill="#1CBB6E"
            />
            <path
              className="logo-letter"
              d="M485.077 8.28L497.606 0H514.47L519.772 13.56H498.57V54.96H509.171H538.118L519.343 69H497.606L485.077 60.84V8.28ZM558.857 8.28L546.756 0H533.21L509.171 13.56H545.364V54.96H515.809L529.64 69H546.756L558.857 60.84V8.28Z"
              fill="#1CBB6E"
            />
            <path
              className="logo-letter"
              d="M565.092 0H577.299L596.059 20.5L599.358 41.4L578.584 18.96V69H565.092V0ZM625.379 49.56V0H638.871V69H626.236L604.177 45.24L600.521 24L625.379 49.56Z"
              fill="#1CBB6E"
            />
          </Logo>
          <Subtitle id="subtitle">{data?.subtitle}</Subtitle>
        </ContentContainer>
        <ControlsContainer id="control-buttons">
          <ControlButton
            onClick={togglePlay}
            aria-label={isPlaying ? 'Video pausieren' : 'Video abspielen'}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </ControlButton>

          <ControlButton
            onClick={toggleMute}
            aria-label={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
          >
            {isMuted ? (
              <FaVolumeMute style={{ width: '20px', height: '20px' }} />
            ) : (
              <FaVolumeUp style={{ width: '20px', height: '20px' }} />
            )}
          </ControlButton>
        </ControlsContainer>
      </>
    </Section>
  );
};

export default Hero;
