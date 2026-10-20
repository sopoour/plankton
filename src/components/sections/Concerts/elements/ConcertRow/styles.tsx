import Typography from '@app/components/Typography/Typography';
import { subheader } from '@app/styles/fonts/fonts';
import { flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  padding: 14px 0;
  row-gap: 8px;
  column-gap: 24px;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.media('sm')`
     display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    padding: 20px 24px;
    row-gap: 16px;
`}
`;

export const ColumnContainer = styled.span`
  ${flexColumn};
  gap: 0px;

  p {
    margin: 0 !important;
  }
`;

export const LeftSide = styled.div`
  ${flexColumn};
  justify-content: center;
  grid-template-columns: max-content max-content;
  column-gap: 16px;
  row-gap: 0px;

  ${({ theme }) => theme.media('sm')`
        row-gap: 4px;
    `};
`;

export const Button = styled(Link)`
  width: 100%;
  height: max-content;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent.lila};
  color: ${({ theme }) => theme.colors.fg.default};
  font-family: ${subheader.style.fontFamily};
  padding: 4px 8px;
  font-size: 16px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 35px rgba(0, 255, 102, 0.6);
  transform: translate(3px, 3px);
  grid-column: 1 / -1;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: rgba(140, 82, 255, 0.8);
    box-shadow: 0 0 50px rgba(0, 255, 102, 0.8);
    transform: translate(3px, 3px);
  }

  ${({ theme }) => theme.media('sm')`
        font-size: 18px;
        padding: 8px 16px;
        width: 50%;
        grid-column: 3;
      `}
`;

export const LocationContainer = styled.span`
  ${flexColumn};
  gap: 8px;
`;

export const TicketNote = styled(Typography)`
  justify-self: center;
  align-self: center;
  font-size: 16px;
  grid-column: 1 / -1;
  font-family: ${subheader.style.fontFamily};

  ${({ theme }) => theme.media('sm')`
        font-size: 18px;
        grid-column: 3;
        justify-self: flex-end;
    `};
`;

export const CityTitle = styled(Typography)`
  text-shadow:
    0 0 20px rgba(168, 85, 247, 0.8),
    /* Naher, intensiver Kern */ 0 0 25px rgba(168, 85, 247, 0.6),
    /* Mittlerer Radius */ 0 0 50px rgba(139, 92, 246, 0.4); /* Weit reichender Ambient-Glow */
`;
