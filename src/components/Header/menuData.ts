import { Menu } from '@/types/Menu';

export const menuData: Menu[] = [
  {
    id: 1,
    title: 'Popular',
    newTab: false,
    path: '/popular',
  },
  {
    id: 2,
    title: 'Shop',
    newTab: false,
    path: '/shop',
  },
  {
    id: 3,
    title: 'Contact',
    newTab: false,
    path: '/contact',
  },

  {
    id: 6,
    title: 'Blogs',
    newTab: false,
    path: '/blogs',
  },
  {
    id: 7,
    title: 'About',
    newTab: false,
    path: '/about',
  },
];

export const searchOptions = [
  { label: 'All Categories', value: '0' },
  { label: 'Sofa', value: '1' },
  { label: 'Bedroom', value: '2' },
  { label: 'Dining & Kitchen', value: '3' },
  { label: 'Living', value: '4' },
  { label: 'Kids Room', value: '5' },
  { label: 'Study & Office', value: '6' },
  { label: 'Furnishing', value: '7' },
  { label: 'Outdoor', value: '8' },
  { label: 'Mattress', value: '9' },
  { label: 'Services', value: '10' },
];
