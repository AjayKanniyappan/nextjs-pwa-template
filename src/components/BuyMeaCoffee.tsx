import Link from 'next/link';
import { AJAY_URL } from '@constants/index';
import { BuyMeaCoffeeSvg } from '@svg/index';

/**
 * It renders a link to my Buy Me a Coffee page, with a coffee cup SVG inside it
 * @returns A div with a link to buy me a coffee.
 */
function BuyMeaCoffee() {
  return (
    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-16 animate-bounce mr-4 z-10">
      <Link
        href={AJAY_URL}
        title="Buy me a coffee"
        target="_blank"
        className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        rel="noreferrer"
      >
        <BuyMeaCoffeeSvg className="transition-all rounded-full w-14 hover:shadow-sm shadow-lg ring hover:ring-4 -rotate-45 ring-white sm:-rotate-0 sm:hover:-rotate-45" />
      </Link>
    </div>
  );
}

export default BuyMeaCoffee;
