import styles from './TextField.module.css';

interface TextFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'search';
  multiline?: boolean;
  rows?: number;
}

export const TextField = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  multiline = false,
  rows = 3,
}: TextFieldProps) => {
  if (multiline) {
    return (
      <textarea
        className={styles.textField}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
      />
    );
  }

  return (
    <input
      className={styles.textField}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
