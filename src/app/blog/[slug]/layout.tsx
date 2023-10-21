import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';

import BackIcon from '@/shared/assets/back.svg';
import { RoutePath } from '@/shared/config/routeConfig';

import styles from '../page.module.css';

export const jetBrains_Mono = JetBrains_Mono({
  weight: ['300'],
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${jetBrains_Mono.variable} ${styles.article}`}>
      <Link href={RoutePath.blog} className={styles.backLink}>
        <BackIcon className={styles.icon} /> Back
      </Link>
      {children}
    </div>
  );
}