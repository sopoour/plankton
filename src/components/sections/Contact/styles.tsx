import LinkContainer from '@app/components/LinkContainer';
import { fastTransition, flexColumn, flexRow } from '@app/styles/mixins';
import { Typography } from '@mantine/core';
import styled from 'styled-components';

export const ContactContainer = styled.div`
  ${flexColumn};
  gap: 64px;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bg.default};

  label {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.fg.default};
  }
`;

export const Button = styled.button`
  padding: 4px 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent.lila};
  color: ${({ theme }) => theme.colors.fg.contrast};
  font-size: 16px;
  font-weight: 600;
  width: max-content;
  height: max-content;
  justify-self: flex-end;
  width: 100%;
  ${fastTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.lila};
    color: ${({ theme }) => theme.colors.fg.default};
  }
`;

export const ContactLinkContainer = styled(LinkContainer)`
  align-items: center;
  align-content: center;
  gap: 20px !important;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.fg.default} !important;
    }
    &:hover {
      path {
        fill: ${({ hoverColour, theme }) => hoverColour ?? theme.colors.accent.lila} !important;
      }
    }
  }
`;
