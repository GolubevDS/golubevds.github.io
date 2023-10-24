import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

import { ArticleList } from '@/entities/Article/ui/ArticleList';
import { Title } from '@/shared/ui/Typography';

import styles from './page.module.css';

export default function Blog() {
  const blogDir = 'articles';
  console.log(path.join(process.cwd(), blogDir));
  const files = fs.readdirSync(path.join(process.cwd(), blogDir));
  const articles = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), blogDir, filename),
      'utf-8',
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });
  return (
    <div className={styles.blog}>
      <Title>Blog</Title>
      <ArticleList articles={articles} />
    </div>
  );
}
