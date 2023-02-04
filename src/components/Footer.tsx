import Link from 'next/link';
import { AUTHOR_URL } from '@constants/index';
import BuyMeaCoffee from '@components/BuyMeaCoffee';

/**
 * It returns a footer with a link to my website
 * @returns JSX.Element
 */
function Footer(): JSX.Element {
  return (
    <>
      <BuyMeaCoffee />
      <div className="hidden sm:block">
        <footer className="fixed bottom-0 w-full border-t dark:bg-[#18181b] dark:border-[#393941]">
          <div className="py-4 text-center">
            <p className="text-lg font-bold text-zinc-800 hover:text-[#000000] dark:text-[#E8E2E2] dark:hover:text-[#F5F5F5]">
              Developed by{' '}
              <Link
                href={AUTHOR_URL}
                className="underline hover:underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                Ajay Kanniyappan
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
