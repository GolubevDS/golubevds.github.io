import Image from 'next/image';
import Link from 'next/link';

import { RoutePath } from '@/shared/config/routeConfig';

import styles from './ArticleListItem.module.css';

interface ArticleListItemProps {
  title: string;
  imagePath?: string;
  description?: string;
  category: string;
}

export const ArticleListItem = ({
  title,
  category,
  imagePath,
  description,
  slug,
}: ArticleListItemProps) => {
  return (
    <Link href={`${RoutePath.blog}/${slug}`} className={styles.root}>
      {imagePath ? (
        <div className={styles.image}>
          <Image src="/article.webp" width={240} height={160} alt="Design" />
        </div>
      ) : null}
      <div className={styles.content}>
        <h6 className={styles.category}>{category}</h6>
        <h3 className={styles.title}>{title}</h3>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
        <p className={styles.dateTime}>May 23 • 18 min read</p>
      </div>
    </Link>
  );
};
