import Section from '@app/components/layout/Section';
import { SectionHeader } from '@app/components/SectionHeader';
import { Breakpoints } from '@app/styles/media';
import { flexRow, removeScrollBar } from '@app/styles/mixins';
import { css, styled } from 'styled-components';

export const NavButton = styled.button<{ $side: 'left' | 'right' }>`
  font-size: 3rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  color: ${({ theme }) => theme.colors.fg.default};
  transition: all 0.3s ease-in-out;
  ${({ $side }) =>
    $side === 'left'
      ? css`
          transform: translate(-100%, -50%);
          left: 15%;
        `
      : css`
          right: 15%;
          transform: translate(100%, -50%);
        `};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.green};
  }
  @media only screen and (max-width: ${Breakpoints.xs}px) {
    display: none;
  }
`;

export const Carousel = styled.div`
  position: relative;
  height: 32rem;
  width: 100%;
  perspective: 500px;
  margin: 0 auto;
  transform-style: preserve-3d;

  ${SectionHeader} {
    text-align: center;
    margin-bottom: 64px;
  }

  // Mobile only
  @media only screen and (max-width: ${Breakpoints.xs}px) {
    ${flexRow};
    margin: auto;
    width: 100%;
    height: 100%;
    gap: 16px;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    ${removeScrollBar};
  }
`;

export const ProjectSection = styled(Section)`
  gap: 48px;
  align-items: center;
  padding: 0;
  justify-content: center;
`;
