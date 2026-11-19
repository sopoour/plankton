import { flexColumn, flexRow, slowTransition } from '@app/styles/mixins';
import { css, styled } from 'styled-components';
import { Breakpoints } from '@app/styles/media';
import Image from 'next/image';
import Typography from '@app/components/Typography/Typography';
import ContentfulImage from '@app/lib/contentful-image';
import LinkContainer from '@app/components/LinkContainer';
import { text } from '@app/styles/fonts/fonts';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-shadow: 0 60px 50px -60px white;
  padding: 32px;
  width: 100%;
  height: 100%;
  opacity: 0;
  ${slowTransition}
  background-color: ${({ theme }) => theme.colors.accent.darkLila};
  background-image: none;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  pointer-events: none;
`;

export const DetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

export const ProjectThumbnail = styled(ContentfulImage)`
  ${slowTransition};
  opacity: 1;
  object-fit: cover;
  position: relative;
  width: 100vw;
  height: 100%;
  border-radius: 10px;

  ${({ theme }) => theme.media('xs')`
box-shadow: 0 60px 50px -60px ${theme.colors.accent.lila};
display: block;
  `}
`;

export const MusicaCardTagline = styled.div`
  bottom: 18px !important;
  position: absolute;
  bottom: -5%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 50;
  padding: 0 28px;
`;

const pseudoEffects = css`
  &::after,
  &::before {
    position: absolute;

    display: block;

    ${slowTransition};
  }

  &::after {
    content: '';
    opacity: 1;
    border-radius: 10px;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 70%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, black 100%);
  }

  &::before {
    z-index: 2;
    opacity: 0;
    bottom: -20px;
    content: 'View details';
    font-weight: 700;
    width: max-content;
    height: max-content;
    font-family: ${text.style.fontFamily};
    padding: 4px 12px;
    left: calc(50% - 55px);
    background-color: ${({ theme }) => theme.colors.accent.darkLila};
    color: ${({ theme }) => theme.colors.fg.default};
  }
`;

const viewedStyle = css`
  transform: rotateY(180deg);
  img {
    opacity: 0;
    // so I can use the links in the header
    z-index: -1;
  }

  ${DetailsContainer} {
    opacity: 1;
    transform: rotateY(180deg);
    pointer-events: auto;
  }

  ${MusicaCardTagline} {
    opacity: 0;
  }

  // so I can use the links in the header
  &::after,
  &:before {
    z-index: -1;
  }

  // don't do hover effect when details card is shown
  &:hover {
    &::after,
    &:before {
      opacity: 0 !important;
    }
  }
`;

export const Card = styled.button<{
  $absOffset: number;
  $offset: number;
  direction: number;
  $viewDetails: boolean;
  $hasDescription: boolean;
}>`
  position: absolute;
  width: 50%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
  transform-style: preserve-3d;
  transform: ${({ $absOffset, $offset, direction }) =>
    `rotateY(calc(${$offset} * 50deg)) 
    scaleY(calc(1 + ${$absOffset} * -0.4))
    translateZ(calc(${$absOffset} * -30rem))
    translateX(calc(${direction} * -5rem))`};
  filter: ${({ $absOffset }) => `blur(calc(${$absOffset} * 0.75rem))`};
  ${slowTransition};
  ${ProjectThumbnail} {
    filter: ${({ $absOffset }) => `brightness(calc(100% - (${$absOffset} * 50%)))`};
  }

  ${pseudoEffects};

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.accent.green};
    border-radius: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
  }

  ${({ $viewDetails, $hasDescription }) => $viewDetails && $hasDescription && viewedStyle};

  ${({ $hasDescription }) =>
    !$hasDescription &&
    css`
      cursor: default;
      pointer-events: none;
      &::before {
        opacity: 0 !important;
      }
    `};

  // Mobile only
  @media only screen and (max-width: ${Breakpoints.xs}px) {
    position: unset;
    height: 300px;
    min-width: 80vw;
    box-shadow: none;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    transform: unset;
    display: inline-block;
    filter: unset;

    ${ProjectThumbnail} {
      filter: unset;
    }

    &:hover {
      img {
        transform: unset;
      }
    }
  }

  ${({ theme }) => theme.media('xs')`
    &:hover {
      ${slowTransition};

      &::before {
        bottom: 15%;
        opacity: 1;
      }
    }

  `}
`;

export const Links = styled(LinkContainer)`
  justify-content: flex-start;
  gap: 10px;

  @media only screen and (max-width: ${Breakpoints.xs}px) {
    a > svg > path {
      fill: ${({ theme }) => theme.colors.fg.default};
    }

    > a:hover {
      > svg > path {
        fill: ${({ theme }) => theme.colors.bg.soft};
      }
    }
  }
`;
