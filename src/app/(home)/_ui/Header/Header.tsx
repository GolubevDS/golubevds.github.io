import Image from 'next/image';

import { Title } from '@/shared/ui/Typography';

import CVIcon from '../../_assets/cv.svg';
import GithubIcon from '../../_assets/github.svg';
import LinkedInIcon from '../../_assets/linkedin.svg';
import TelegramIcon from '../../_assets/telegram.svg';
import { SocialLink } from '../SocialLink';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        className={styles.avatar}
        width={100}
        height={100}
        src="/avatar.png"
        alt="My photo"
      />
      <div className={styles.infoContainer}>
        <Title>
          Hey, I'm Jackson — I'm a Product Designer & No-Code Expert
        </Title>
        <Title level="h4" type="secondary">
          I am a seasoned product designer with 5 years of experience
          specializing in SaaS solutions, crafting user-centric experiences that
          drive innovation and efficiency.
        </Title>
      </div>
      <div className={styles.socialLinks}>
        <SocialLink href="/" Icon={LinkedInIcon} />
        <SocialLink href="/" Icon={CVIcon} />
        <SocialLink href="/" Icon={TelegramIcon} />
        <SocialLink href="/" Icon={GithubIcon} />
      </div>
    </div>
  );
};
