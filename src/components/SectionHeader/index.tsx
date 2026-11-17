import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { subheader } from '@app/styles/fonts/fonts';
import { FC, HTMLAttributes } from 'react';

export const Header = styled(Typography)`
  font-family: ${subheader.style.fontFamily};
  color: ${({ theme }) => theme.colors.accent.green};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

type Props = {
  children: string;
} & HTMLAttributes<HTMLHeadingElement>;

const SectionHeader: FC<Props> = ({ children, ...props }) => (
  <Header as="h2" {...props}>
    {children}
  </Header>
);

export default SectionHeader;
