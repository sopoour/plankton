import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { subheader } from '@app/styles/fonts/fonts';

export const SectionHeader = styled(Typography)`
  font-family: ${subheader.style.fontFamily};
  color: ${({ theme }) => theme.colors.accent.green};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;
