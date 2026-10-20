import { SectionHeader } from '@app/components/SectionHeader';
import { Video } from '@app/services/graphql/types';
import { flexColumn, flexRow } from '@app/styles/mixins';
import { FC } from 'react';
import styled from 'styled-components';

const VideoLayer = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 16px 20px;
  max-width: 1200px;
  box-sizing: border-box;
  pointer-events: none; /* Erst klickbar machen wenn eingeflogen */
  ${({ theme }) => theme.media('sm')`
         position: absolute;
         top: 10%;
          height: 100vh;
    `}
`;

const Content = styled.div`
  ${flexColumn};
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  ${({ theme }) => theme.media('sm')`
      gap: 120px;
    `}
`;

const Grid = styled.div`
  ${flexColumn};
  gap: 32px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  ${({ theme }) => theme.media('sm')`
      ${flexRow};
      height: auto;
    `}
`;

const VideoCard = styled.div`
  pointer-events: auto;
  overflow: hidden;
  box-shadow: 0 10px 20px ${({ theme }) => theme.colors.bg.accentBlur};
  aspect-ratio: 16 / 9;
  width: 100%;

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
  return (
    <VideoLayer id="videos">
      <Content>
        <SectionHeader id="videos-header">&#47;&#47; Live_Sessions</SectionHeader>
        <Grid>
          {videos?.map((video, index) => (
            <VideoCard key={video.videoLink || '' + index} className="video-card">
              <iframe src={video.videoLink || ''} allowFullScreen />
            </VideoCard>
          ))}
        </Grid>
      </Content>
    </VideoLayer>
  );
};

export default Videos;
