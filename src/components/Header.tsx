import Link from 'next/link';
import { CatLogoSvg } from '@svg/index';
import NavBar from '@components/NavBar';

/**
 * It returns a header element with a logo, a title, and a navigation bar
 * @returns A JSX element
 */
function Header(): JSX.Element {
  return (
    <header className="sticky h-16 top-0 flex items-center justify-between px-8 py-02 rounded-b-2xl border-b bg-[#F3EFE0] dark:bg-[#18181b] dark:border-[#393941]">
      <div className="hidden sm:block">
        <div className="h-16">
          <Link href="/">
            <CatLogoSvg className="w-full h-full" />
          </Link>
        </div>
      </div>
      <div className="mr-auto font-semibold text-xl">
        <Link href="/">Cats Realm</Link>
      </div>
      <div className="sm:hidden justify-end">
        <div className="h-16 dark:hover:text-[#fff9d9]">
          <Link href="/" aria-label="Cat">
            <CatLogoSvg className="w-full h-full" />
          </Link>
        </div>
      </div>
      {/* NAVIGATION BAR */}
      <NavBar />
    </header>
  );
}

export default Header;
