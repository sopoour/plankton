import Typography from '@app/components/Typography/Typography';
import { Konzert } from '@app/services/graphql/types';
import { flexColumn, flexRow } from '@app/styles/mixins';
import { FC, useState } from 'react';
import styled from 'styled-components';
import ConcertRow from './ConcertRow';
import { header } from '@app/styles/fonts/fonts';
import SectionHeader from '@app/components/SectionHeader';
import Button from '@app/components/Button';

const SectionContainer = styled.div`
  ${flexColumn};
  gap: 20px;

  ${({ theme }) => theme.media('sm')`
     gap: 60px;
`}
`;

const TitleContainer = styled.span`
  ${flexColumn};
  gap: 28px;
  align-items: center;
  > p {
    margin: 0;
  }

  ${({ theme }) => theme.media('sm')`
     gap: 40px;
`}
`;

const ConcertContainer = styled.div`
  ${flexColumn};
  position: relative;
  width: 100%;
  gap: 8px;
`;

const ButtonContainer = styled.span`
  ${flexRow}
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    display: block;
    bottom: 45px;
    left: 0;
    width: 100%;
    height: 160px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 60%,
      #000000 100%
    );
    transition: opacity 0.3s ease;
  }
`;

type Props = {
  title: string;
  subTitle?: string;
  concerts?: Konzert[];
  shownEventsNumber?: number;
  pastConcerts?: boolean;
};

const ConcertSection: FC<Props> = ({
  title,
  subTitle,
  concerts,
  shownEventsNumber = 2,
  pastConcerts,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleShows = showAll ? concerts : concerts?.slice(0, shownEventsNumber);

  return (
    <SectionContainer>
      <TitleContainer>
        {subTitle && <SectionHeader>{subTitle}</SectionHeader>}
        <Typography
          as="h3"
          type={header.style.fontFamily}
          fontSize="32px"
          fontSizeSm="48px"
          $textalign="center"
          lineHeight="1"
        >
          {title}
        </Typography>
      </TitleContainer>

      <ConcertContainer>
        {visibleShows?.map((show) => (
          <ConcertRow key={show?.venue || ''} concert={show} />
        ))}
        {!showAll && concerts && concerts?.length > shownEventsNumber && (
          <ButtonContainer>
            <Button
              text="Alle anzeigen"
              isSubmitButton
              width="max-content"
              onClick={() => setShowAll(true)}
            />
          </ButtonContainer>
        )}
      </ConcertContainer>
    </SectionContainer>
  );
};

export default ConcertSection;
