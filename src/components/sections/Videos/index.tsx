import { Video } from '@app/services/graphql/types';
import { FC, useRef } from 'react';
import styled from 'styled-components';

const VideoLayer = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  max-width: 1200px;
  pointer-events: none; /* Erst klickbar machen wenn eingeflogen */
`;

const Grid = styled.div`
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideoCard = styled.div`
  pointer-events: auto;
  overflow: hidden;
  box-shadow: 0 10px 20px ${({ theme }) => theme.colors.bg.accentBlur};
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

type Props = {
  videos?: Video[] | null;
};

const Videos: FC<Props> = ({ videos }) => {
  const videoCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <VideoLayer>
      <Grid>
        {videos?.map((video, index) => (
          <VideoCard key={video.videoLink} id={`video-card-${index}`}>
            <iframe src={video.videoLink || ''} allowFullScreen />
          </VideoCard>
        ))}
      </Grid>
    </VideoLayer>
  );
};

export default Videos;
