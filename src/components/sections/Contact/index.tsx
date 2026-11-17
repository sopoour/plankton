import Section from '@app/components/layout/Section';
import theme from '@app/styles/theme';
import { Checkbox, Group, Textarea, TextInput, VisuallyHidden, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC, useRef, useState } from 'react';
import EmailCopy from '../../EmailCopy';
import Typography from '@app/components/Typography/Typography';
import { Button, ContactContainer, ContactLinkContainer, FormContainer } from './styles';
import { IconLink } from '@app/types';

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
      name: (value) => (value.trim().length > 0 ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) =>
        value.trim().length > 10 ? null : 'Message must be at least 10 characters',
      gdpr: (value) => (value ? null : 'You must agree to the GDPR terms'),
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
    <Section id="kontakt">
      <>
        <ContactContainer>
          <VisuallyHidden component={'h2'}>Kontakt</VisuallyHidden>
          <FormContainer onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Name"
              placeholder="Dein Name"
              {...form.getInputProps('name')}
              withAsterisk
              size="lg"
              radius="md"
              key={form.key('name')}
            />
            <TextInput
              label="E-mail"
              placeholder="name@beispiel.com"
              {...form.getInputProps('email')}
              withAsterisk
              size="lg"
              radius="md"
              key={form.key('email')}
            />
            <Textarea
              label="Nachricht"
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
              color={theme.colors.fg.default}
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
          <Flex gap={'32px'} direction={'column'} align={{ base: 'center' }}>
            <Typography
              fontSize="24px"
              type="montserrat"
              color={theme.colors.accent.lila}
              fontWeight={600}
              as={'h3'}
            >
              Oder erreiche uns unter
            </Typography>
            <EmailCopy email="kontakt@buchstabensuppe-hoerspiel.de" />
            <ContactLinkContainer iconLinks={links} />
          </Flex>
        </ContactContainer>
      </>
    </Section>
  );
};

export default Contact;
