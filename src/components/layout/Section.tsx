import { flexColumn } from '@app/styles/mixins';
import { FC, HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const maxContainerPadding = { mobile: 20, desktop: 24 };

const MaxWidthContainer = styled.section<{ $maxWidth?: number }>`
  width: 100%;
  margin: 0 auto;
  position: relative;
  ${flexColumn};
  gap: 24px;
  width: 100%;
  min-height: unset;
  padding: 32px ${maxContainerPadding.mobile}px;
  max-width: ${({ $maxWidth }) => $maxWidth || 1000}px;

  ${(props) => props.theme.media('sm')`
    padding: 40px ${maxContainerPadding.desktop}px;
    min-height: 100vh;
  `}
`;

type Props = {
  $maxWidth?: number;
  children: ReactElement;
  className?: string;
  id?: string;
} & HTMLAttributes<unknown>;

const Section: FC<Props> = ({ children, className, $maxWidth, id, ...props }) => {
  return (
    <MaxWidthContainer
      className={className}
      {...props}
      aria-label={id}
      id={id}
      $maxWidth={$maxWidth}
    >
      {children}
    </MaxWidthContainer>
  );
};

export default Section;
