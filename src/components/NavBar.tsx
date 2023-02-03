import Link from 'next/link';
import { useRouter } from 'next/router';

const navBar: cat.NavBar = [
  { id: 1, label: 'Facts', href: '/facts' },
  { id: 2, label: 'Breeds', href: '/breeds' },
];

function NavBar(): JSX.Element {
  const router = useRouter();

  return (
    <div className="hidden sm:block justify-end">
      <nav className="text-lg">
        <ul className="flex items-center m-4 font-medium space-x-8 lg:mr-20">
          {navBar.map((links) => (
            <li key={links.id}>
              <Link
                href={links.href}
                className={`${
                  router.pathname === links.href
                    ? 'text-[#0099FF] dark:text-[#E6DDC4]'
                    : 'text-zinc-600 hover:text-[#000000] dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
              >
                <span className="">{links.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
