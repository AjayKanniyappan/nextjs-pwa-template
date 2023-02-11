import Link from 'next/link';
import { useRouter } from 'next/router';
import { navBar } from '@common/navigation';
import { ExternalSvg } from '@svg/index';

/**
 * It's a function that returns a Navbar
 * @returns A JSX element
 */
function NavBar(): JSX.Element {
  const router = useRouter();

  return (
    <div className="hidden sm:block justify-end">
      <nav className="text-lg">
        <ul className="flex items-center m-12 mr-8 font-medium space-x-8 lg:mr-44">
          {navBar.map((links) => (
            <li key={links.id}>
              <Link
                href={links.href}
                target={links.external ? '_blank' : '_self'}
                className={`${
                  router.pathname === links.href
                    ? 'text-[#0099FF] dark:text-[#E6DDC4]'
                    : 'text-zinc-600 hover:text-[#000000] dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
              >
                <span>{links.label}</span>
                {links.external ? <ExternalSvg className="ml-1 mb-1 inline" /> : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
