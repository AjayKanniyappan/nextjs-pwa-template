import Link from 'next/link';
import { BackArrowSvg, CatFourOFourSvg } from '@svg/index';

/**
 * "Custom 404 page."
 * It returns a div with a cat SVG, a 404 message, a paragraph, and a link to return home
 * @returns A div with a cat, a 404, and a link to return home.
 */
export default function FourOFour(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-7/12 md:w-4/12 lg:w-3/12">
        <CatFourOFourSvg />
      </div>
      <div className="text-5xl font-bold">404</div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-[#f2f2f2] mt-8">
          Page Not Found
        </p>
        <p className="md:text-lg lg:text-xl text-gray-600 dark:text-[#cccccc] mt-8">
          Sorry, the page you are looking for doesn&lsquo;t exist.
        </p>
        <Link
          href="/"
          className="flex items-center space-x-2 bg-[#0099ff] hover:bg-[#0087ff] text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
          title="Return Home"
        >
          <BackArrowSvg />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
