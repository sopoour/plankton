import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useSWR from 'swr';
import { Konzert } from '@app/services/graphql/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import MaxWidthContainer from '@app/components/MaxWidthContainer';
import { normalizeDate } from '@app/utils/formatDate';
import ConcertSection from './elements/ConcertSection';

gsap.registerPlugin(ScrollTrigger);

const ConcertsWrapper = styled.section`
  top: 0;
  width: 100%;
  z-index: 4; /* Höherer Z-Index als die vorherigen Sektionen */
  background-color: ${({ theme }) => theme.colors.bg.default};
  padding: 40px 0;
  min-height: 100vh;
  box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.9);
`;

const Concerts: FC = () => {
  const { data, isLoading } = useSWR<Konzert[] | null>('/api/concerts', fetcher);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Strip time from today

  const upcomingShows = data
    ?.filter((live) => normalizeDate(live.datum) >= today)
    ?.sort((a, b) => normalizeDate(a.datum).getTime() - normalizeDate(b.datum).getTime());

  const pastShows = data
    ?.filter((live) => normalizeDate(live.datum) < today)
    ?.sort((a, b) => normalizeDate(b.datum).getTime() - normalizeDate(a.datum).getTime());

  return (
    <ConcertsWrapper id="concerts">
      <MaxWidthContainer>
        {upcomingShows && upcomingShows?.length > 0 && (
          <ConcertSection
            title={'Kommende Shows'}
            subTitle={`// Konzerte`}
            concerts={upcomingShows}
            shownEventsNumber={4}
          />
        )}
        {pastShows && pastShows?.length > 0 && (
          <ConcertSection title={'Vergangene Shows'} concerts={pastShows} pastConcerts />
        )}
      </MaxWidthContainer>
    </ConcertsWrapper>
  );
};

export default Concerts;
