import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

import styles from './styles.module.css';

export const components: MDXComponents = {
  p: ({ children }) => <p className={styles.text}>{children}</p>,
  ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
  li: ({ children }) => <li className={styles.text}>{children}</li>,
  h1: ({ children }) => <h1 className={styles.title}>{children}</h1>,
  h2: ({ children }) => <h2 className={styles.subtitle}>{children}</h2>,
  div: ({ children }) => <div className={styles.div}>{children}</div>,
  img: ({ src = '', alt = '', width = '0', height = '0' }) => {
    const CONTENT_WIDTH = 800 - 48 * 2;

    const newHeight = CONTENT_WIDTH / (Number(width) / Number(height));

    return (
      <Image
        src={src}
        alt={alt}
        width={CONTENT_WIDTH}
        height={newHeight || 500}
      />
    );
  },
};
