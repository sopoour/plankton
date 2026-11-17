import { header, subheader } from '@app/styles/fonts/fonts';
import { fastTransition } from '@app/styles/mixins';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled(Link)<{ hoverColor?: string; $width?: string }>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.bg.default};
  padding: 8px 16px;
  text-align: center;
  font-size: 14px;
  align-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.fg.default};
  color: ${({ theme }) => theme.colors.accent.darkLila};
  font-weight: 700;
  ${fastTransition};
  font-family: ${subheader.style.fontFamily};

  &:hover {
    background-color: ${({ theme, hoverColor }) => hoverColor || theme.colors.bg.accentBlur};
    color: ${({ theme }) => theme.colors.fg.default};
  }
  ${({ theme, $width }) => theme.media('sm')`
    width: ${$width || '100%'};
    font-size: 16px;
  `}
`;

type Props = {
  href?: string;
  isSubmitButton?: boolean;
  newTab?: boolean;
  text?: string;
  hoverColor?: string;
  width?: string;
  className?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  href,
  newTab = false,
  text = 'Ticket',
  isSubmitButton = false,
  hoverColor,
  width,
  className,
  onClick,
}) => {
  return (
    <ButtonStyle
      href={href || ''}
      target={newTab ? '_blank' : '_self'}
      as={isSubmitButton ? 'button' : Link}
      hoverColor={hoverColor}
      $width={width}
      className={className}
      onClick={onClick}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
