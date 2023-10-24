import styles from './styles.module.css';

interface SubtitleProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  type?: 'primary' | 'secondary';
  children: ChildrenType;
}

export const Title = ({
  level = 'h1',
  type = 'primary',
  children,
}: SubtitleProps) => {
  const TagName = level;

  const typeStyle = styles[type];
  const levelStyle = styles[level];

  return <TagName className={`${levelStyle} ${typeStyle}`}>{children}</TagName>;
};
