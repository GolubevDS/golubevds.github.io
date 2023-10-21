export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  BLOG = 'blog',
  CONTACT = 'contact',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.BLOG]: '/blog',
  [AppRoutes.CONTACT]: '/contact',
};
