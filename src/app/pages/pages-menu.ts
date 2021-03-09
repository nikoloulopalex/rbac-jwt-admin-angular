import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'CRUD',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Users',
    icon: 'person-outline',
    link: '/users',
  },
  {
    title: 'Products',
    icon: 'cube-outline',
    link: '/products',
  },
  {
    title: 'Shops',
    icon: 'shopping-bag-outline',
    link: '/shops',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Roles Test',
    icon: 'lock-outline',
    link: '/users/test-roles',
  },
  {
    title: 'Gallery',
    icon: 'file-text-outline',
    link: '/files',
  },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
