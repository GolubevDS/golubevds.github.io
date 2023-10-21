import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};
