import AboutIcon from '@/shared/assets/Sidebar/about.svg';
import BlogIcon from '@/shared/assets/Sidebar/blog.svg';
import ContactIcon from '@/shared/assets/Sidebar/contact.svg';
import HomeIcon from '@/shared/assets/Sidebar/home.svg';
import { RoutePath } from '@/shared/config/routeConfig';

export interface SidebarItem {
  path: string;
  label: string;
  Icon: React.VFC<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItem[] = [
  {
    path: RoutePath.home,
    label: 'Home',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    label: 'About',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.blog,
    label: 'Blog',
    Icon: BlogIcon,
  },
  {
    path: RoutePath.contact,
    label: 'Contact',
    Icon: ContactIcon,
  },
];
