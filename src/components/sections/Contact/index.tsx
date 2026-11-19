import Section from '@app/components/layout/Section';
import theme from '@app/styles/theme';
import { Checkbox, Group, Textarea, TextInput, VisuallyHidden, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC, useRef, useState } from 'react';
import EmailCopy from '../../EmailCopy';
import Typography from '@app/components/Typography/Typography';
import {
  Button,
  ContactContainer,
  ContactLinkContainer,
  ContactSection,
  ContactSideTitle,
  FormContainer,
} from './styles';
import { IconLink } from '@app/types';
import SectionHeader from '@app/components/SectionHeader';

const links: IconLink[] = [
  { type: 'instagram' },
  { type: 'tidal' },
  { type: 'spotify' },
  { type: 'youtube' },
];

const Contact: FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      gdpr: false,
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : 'Name ist erforderlich'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Ungültige E-mail Adresse'),
      message: (value) =>
        value.trim().length > 10 ? null : 'Die Nachricht muss mindestens 10 Zeichen haben',
      gdpr: (value) => (value ? null : 'Du musst den DSGV Bedingungen zustimmen'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  return (
    <ContactSection id="kontakt">
      <>
        <SectionHeader>&#47;&#47; kontakt</SectionHeader>
        <ContactContainer>
          <VisuallyHidden component={'h2'}>Kontakt</VisuallyHidden>
          <FormContainer onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              placeholder="Dein Name"
              {...form.getInputProps('name')}
              withAsterisk
              size="lg"
              radius="md"
              key={form.key('name')}
            />
            <TextInput
              placeholder="name@beispiel.com"
              {...form.getInputProps('email')}
              withAsterisk
              size="lg"
              radius="md"
              key={form.key('email')}
            />
            <Textarea
              placeholder="Schreibe eine Nachricht..."
              minRows={4}
              autosize
              {...form.getInputProps('message')}
              withAsterisk
              size="lg"
              radius="md"
            />
            <Checkbox
              style={{ maxWidth: '400px' }}
              color={theme.colors.fg.contrast}
              label="Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann."
              {...form.getInputProps('gdpr', { type: 'checkbox' })}
            />
            <Group mt="md">
              <Button type="submit">Senden</Button>
            </Group>

            {status === 'sent' && (
              <Typography color={theme.colors.fg.default}>
                Nachricht erfolgreich gesendet!
              </Typography>
            )}
            {status === 'error' && (
              <Typography color="red">
                Etwas ist schief gelaufen. Bitte versuche es noch einmal.
              </Typography>
            )}
          </FormContainer>
          <Flex gap={'28px'} direction={'column'} align={{ base: 'center' }}>
            <ContactSideTitle
              fontSize="24px"
              type="wallpoet"
              color={theme.colors.fg.default}
              as={'h3'}
            >
              Oder erreiche uns unter
            </ContactSideTitle>
            <EmailCopy email="planktontakt@gmail.com" />
            <ContactLinkContainer iconLinks={links} />
          </Flex>
        </ContactContainer>
      </>
    </ContactSection>
  );
};

export default Contact;
