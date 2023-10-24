import { Header } from './_ui/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
}
