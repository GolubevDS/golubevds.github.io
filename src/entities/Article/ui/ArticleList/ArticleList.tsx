import { ArticleListItem } from '../ArticleListItem';

import styles from './ArticleList.module.css';

// const articles = [
//   {
//     title: 'What`s the Difference Between UX and UI?',
//     category: 'DESIGN',
//     description:
//       'In this article, we`ll delve into the key differences between UX and UI, shedding light on their individual contributions to crafting exceptional user-centric designs.',
//     imagePath: '/article.webp',
//   },
//   {
//     title: 'Take It one Step At a Time',
//     category: 'PRODUCTIVITY',
//     imagePath: '/article.webp',
//   },
//   {
//     title: 'How Do I Design a Website?',
//     category: 'DESIGN',
//     description:
//       'In today`s digital age, a well-designed website is a crucial asset for businesses, creatives, and individuals alike. It`s often the first impression visitors have of your brand or content, so getting it right is essential.',
//     imagePath: '/article.webp',
//   },
//   {
//     title: '5 Digital Product Ideas for Designers',
//     category: 'MAKING MONEY',
//     imagePath: '/article.webp',
//     description:
//       'In the ever-expanding digital landscape, product designers have a unique opportunity to harness their creativity and expertise to create digital products that not only cater to user needs but also generate income.',
//   },
//   {
//     title: '3 Simple Steps to Boost Your Productivity',
//     category: 'PRODUCTIVITY',
//     imagePath: '/article.webp',
//   },
// ];

export const ArticleList = ({ articles }: any) => {
  return (
    <div className={styles.root}>
      {articles.map((item, i) => (
        <ArticleListItem key={i} {...item.meta} slug={item.slug} />
      ))}
    </div>
  );
};
