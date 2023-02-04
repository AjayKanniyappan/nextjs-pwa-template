import { BreedSvg, FactSvg, HomeSvg } from '@svg/index';

const bottomNavigation: cat.BottomNavigation = [
  {
    id: 1,
    label: 'Home',
    href: '/',
    icon: <HomeSvg className="w-6 h-6" />,
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

const navBar: cat.Navbar = [
  { id: 1, label: 'Facts', href: '/facts' },
  { id: 2, label: 'Breeds', href: '/breeds' },
];

export { bottomNavigation, navBar };
