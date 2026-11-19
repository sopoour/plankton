import { Tooltip, Text } from '@mantine/core';
import { FC, useState } from 'react';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import Typography from '@app/components/Typography/Typography';
import theme from '@app/styles/theme';

const CopyEmail = styled(Typography)`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.green};
  }
`;

type Props = {
  email: string;
  label?: string;
};

const EmailCopy: FC<Props> = ({ email, label }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = (text: string) => {
    copy(text);
    setCopied(true);
  };

  return (
    <Tooltip
      label={copied ? 'Kopiert!' : 'E-mail kopieren'}
      withArrow
      position="bottom"
      color={theme.colors.accent.lila}
      offset={12}
      transitionProps={{ transition: 'pop', duration: 300 }}
      events={{ hover: true, focus: true, touch: true }}
    >
      <CopyEmail
        fontWeight={500}
        onClick={() => copyEmail(email)}
        onMouseLeave={() => setCopied(false)}
        fontSize="18px"
      >
        {label && `${label}: `}
        {email}
      </CopyEmail>
    </Tooltip>
  );
};

export default EmailCopy;
