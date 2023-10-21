import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeImgSize from 'rehype-img-size';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';

import { components } from '@/shared/ui/mdx';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'articles'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'material-theme-darker',
            light: 'material-theme-lighter',
          },
          keepBackground: false,
        },
      ],
      [rehypeImgSize, { dir: 'public' }],
    ],
  },
};

function getPost({ slug }: { slug: string }) {
  console.log(slug);
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), 'articles', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
      <MDXRemote
        source={props.content}
        components={components}
        options={options}
      />
    </article>
  );
}
