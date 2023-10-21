import Link from 'next/link';

import { SidebarItem as SidebarItemProps } from '../../model/items';

import styles from './SidebarItem.module.css';

export const SidebarItem = ({ Icon, label, path }: SidebarItemProps) => {
  return (
    <Link className={styles.sidebarItem} href={path}>
      <Icon className={styles.icon} />
      <h6 className={styles.label}>{label}</h6>
    </Link>
  );
};
