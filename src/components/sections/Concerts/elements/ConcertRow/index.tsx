import Typography from '@app/components/Typography/Typography';
import { Konzert } from '@app/services/graphql/types';
import { ISOToDate, ISOToDay, ISOToMonthYear } from '@app/utils/formatDate';
import { FC } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import {
  Button,
  CityTitle,
  ColumnContainer,
  LeftSide,
  LocationContainer,
  RowContainer,
  TicketNote,
} from './styles';
import { header, subheader } from '@app/styles/fonts/fonts';

type Props = {
  concert: Konzert;
};

const ConcertRow: FC<Props> = ({ concert }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isDesktop = useMedia(Breakpoints.sm);
  return (
    <RowContainer>
      <ColumnContainer>
        <CityTitle fontSize="28px" fontSizeSm="48px" type={header.style.fontFamily} lineHeight="1">
          {concert.ort}
        </CityTitle>
        <Typography fontSize="16px" fontSizeSm="28px" type={subheader.style.fontFamily}>
          {concert.venue}
        </Typography>
      </ColumnContainer>

      <LeftSide>
        <Typography fontSize="28px" fontSizeSm="48px" type={header.style.fontFamily} lineHeight="1">
          {concert.datum && ISOToDay(concert.datum)}
        </Typography>
        <Typography fontSize="16px" fontSizeSm="20px" type={subheader.style.fontFamily}>
          {concert.datum && ISOToMonthYear(concert.datum)}
        </Typography>
      </LeftSide>
      {(concert.ticketLink || concert.ticketNote) &&
        (concert.ticketLink ? (
          <Button href={concert.ticketLink} target="_blank">
            Tickets <FiArrowUpRight />
          </Button>
        ) : (
          <TicketNote>{concert.ticketNote}</TicketNote>
        ))}
    </RowContainer>
  );
};

export default ConcertRow;
