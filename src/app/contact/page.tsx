'use client';

import { useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/TextField';
import { Title } from '@/shared/ui/Typography';

import styles from './page.module.css';

export default function Contact() {
  const [text, setText] = useState('');

  return (
    <div className={styles.contact}>
      <Title>Let`s Chat</Title>
      <p className={styles.subtitle}>
        If you`d like to talk about a potential project or just say hi, send me
        a message or email me at{' '}
        <a
          href="mailto:golubev.rocket@gmail.com"
          rel="noopener"
          className={styles.email}
        >
          golubev.rocket@gmail.com
        </a>
        !
      </p>
      <div className={styles.form}>
        <TextField
          placeholder="Name"
          value={text}
          onChange={setText}
          type="text"
        />
        <TextField
          placeholder="Email"
          value={text}
          onChange={setText}
          type="text"
        />
        <TextField
          placeholder="Message"
          value={text}
          onChange={setText}
          type="text"
          multiline={true}
          rows={5}
        />
        <Button label="Send Message" />
      </div>
    </div>
  );
}
