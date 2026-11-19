import LinkContainer from '@app/components/LinkContainer';
import { fastTransition, flexColumn, flexRow, glowEffect } from '@app/styles/mixins';
import styled from 'styled-components';
import Typography from '@app/components/Typography/Typography';
import Section from '@app/components/layout/Section';

export const ContactContainer = styled.div`
  ${flexColumn};
  gap: 64px;
  align-items: center;

  ${({ theme }) => theme.media('sm')`
      ${flexRow};
    `}
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bg.default};

  label {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.fg.default};
  }

  textarea,
  input {
    margin-bottom: 16px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accent.green};
    color: ${({ theme }) => theme.colors.fg.default};
    border-radius: 0;
    box-shadow:
      0 0 4px rgba(168, 85, 247, 0.8),
      /* Naher, intensiver Kern */ 0 0 8px rgba(168, 85, 247, 0.6),
      /* Mittlerer Radius */ 0 0 10px rgba(139, 92, 246, 0.4);
  }

  ${({ theme }) => theme.media('sm')`
      gap: 16px;
  padding: 32px;
    `}
`;

export const Button = styled.button`
  padding: 4px 18px;
  background-color: ${({ theme }) => theme.colors.accent.lila};
  color: ${({ theme }) => theme.colors.fg.default};
  font-size: 16px;
  font-weight: 600;
  width: max-content;
  height: max-content;
  justify-self: flex-end;
  width: 100%;
  ${fastTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.darkLila};
    color: ${({ theme }) => theme.colors.fg.default};
  }
`;

export const ContactLinkContainer = styled(LinkContainer)`
  align-items: center;
  align-content: center;
  gap: 20px !important;
`;

export const ContactSideTitle = styled(Typography)`
  ${glowEffect}
`;

export const ContactSection = styled(Section)`
  gap: 32px;
  align-items: center;

  ${({ theme }) => theme.media('sm')`
      gap: 40px;
    `}
`;
