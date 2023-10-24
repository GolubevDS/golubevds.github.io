import Link from 'next/link';

import styles from './SocialLink.module.css';

interface SocialLinkProps {
  href: string;
  Icon: IconType;
}

export const SocialLink = ({ href, Icon }: SocialLinkProps) => {
  return (
    <Link href={href} className={styles.socialLink}>
      <Icon />
    </Link>
  );
};
