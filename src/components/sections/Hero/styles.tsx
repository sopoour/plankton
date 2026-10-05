import Typography from '@app/components/Typography/Typography';
import { subheader } from '@app/styles/fonts';
import styled from 'styled-components';
import LogoSvg from '@app/assets/logo.svg';

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
  filter: brightness(0.5);
  scale: 1.35;
`;

export const ContentContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  text-align: center;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled(Typography)`
  margin-top: 1rem;
  font-size: 18px;
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 300;
  font-family: ${subheader.style.fontFamily};
  ${({ theme }) => theme.media('sm')`
     font-size: 24px;
  `}
`;

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 20%;
  right: 36%;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  ${({ theme }) => theme.media('sm')`
    right: 46%;
  `}
`;

export const ControlButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 10px;
  color: #f5f5dc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.lila};
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

export const Logo = styled.svg`
  height: auto;
  display: block;

  .logo-letter {
    opacity: 0;
  }
`;
