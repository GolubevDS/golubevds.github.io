import Link from 'next/link';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside
      className={styles.sidebar}
      aria-label="Profile and navigation sidebar"
    >
      <div className={styles.profile}>
        <Link href="/" className={styles.link} title="Home page">
          <h3 className={styles.name}>Dmitry Golubev</h3>
          <p className={styles.position}>Frontend Developer</p>
        </Link>
      </div>
      <nav aria-label="Primary navigation">
        {SidebarItemsList.map(({ Icon, label, path }) => (
          <SidebarItem Icon={Icon} label={label} path={path} key={label} />
        ))}
      </nav>
    </aside>
  );
};
