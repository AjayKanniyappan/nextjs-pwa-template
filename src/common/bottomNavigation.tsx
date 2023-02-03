/* Defining an array of objects. */
import { BreedSvg, FactSvg, HomeSvg } from '@svg/index';

const bottomNavigation: cat.BottomNavigation = [
  {
    id: 1,
    label: 'Home',
    href: '/',
    icon: <HomeSvg />,
  },
  {
    id: 2,
    label: 'Facts',
    href: '/facts',
    icon: <FactSvg />,
  },
  {
    id: 3,
    label: 'Breeds',
    href: '/breeds',
    icon: <BreedSvg />,
  },
];

export default bottomNavigation;
