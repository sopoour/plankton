import { FC, useEffect, useRef, useState } from 'react';
import {
  Card,
  DetailHeader,
  DetailsContainer,
  Links,
  MusicaCardTagline,
  ProjectThumbnail,
} from './styles';
import useClickOutside from '@app/hooks/useClickOutside';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import useKeyPress from '@app/hooks/useKeyPress';
import Typography from '@app/components/Typography/Typography';
import { Release } from '@app/services/graphql/types';
import { mapSocialLinks } from '@app/utils/formatLinks';

const MAX_VISIBILITY = 3;

type Props = {
  release: Release;
  activeIndex: number;
  projectIndex: number;
};

const ReleaseCard: FC<Props> = ({ release, activeIndex, projectIndex }) => {
  const [view, setView] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);
  const isDesktop = useMedia(Breakpoints.xs);
  const arrowRightPressed = useKeyPress('ArrowRight');
  const arrowLeftPressed = useKeyPress('ArrowLeft');
  useClickOutside(ref, () => setView(false));

  // if any of the indexes change, turn around the card
  useEffect(() => setView(false), [activeIndex, projectIndex]);

  useEffect(() => {
    // if user uses arrows to navigate then make sure the correct card is in focus so onEnter it turns
    if (activeIndex === projectIndex && (arrowLeftPressed || arrowRightPressed))
      return ref.current?.focus();
  }, [activeIndex, projectIndex, arrowLeftPressed, arrowRightPressed]);

  return (
    <Card
      $offset={(activeIndex - projectIndex) / 3}
      $absOffset={Math.abs(activeIndex - projectIndex) / 3}
      direction={Math.sign(activeIndex - projectIndex)}
      style={
        isDesktop
          ? {
              opacity: Math.abs(activeIndex - projectIndex) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(activeIndex - projectIndex) > MAX_VISIBILITY ? 'none' : 'block',
              pointerEvents: activeIndex === projectIndex ? 'auto' : 'none',
            }
          : {}
      }
      $viewDetails={view}
      onClick={() => isDesktop && setView((prev) => !prev)}
      ref={ref}
      aria-label={`${release.title}-project-card`}
      tabIndex={activeIndex === projectIndex ? 0 : -1}
      $hasDescription={!!release.beschreibung}
    >
      <DetailsContainer>
        <DetailHeader>
          <Typography fontWeight={700}>{release.title}</Typography>
          <Links iconLinks={mapSocialLinks(release.distributorUrLs as string[])} size="small" />
        </DetailHeader>
        <Typography fontSize={'14px'}>{release.beschreibung}</Typography>
      </DetailsContainer>
      <ProjectThumbnail
        src={release.coverBild?.url || ''}
        alt={`${release.title} - Project thumbnail`}
        fill
        sizes="(max-width: 768px) 100vw"
      />
      <MusicaCardTagline>
        <Typography fontWeight={700}>{release.title}</Typography>
        <Links iconLinks={mapSocialLinks(release.distributorUrLs as string[])} size="small" />
      </MusicaCardTagline>
    </Card>
  );
};

export default ReleaseCard;
