import Link from 'next/link';
import CatSvg from '@/common/catSvg';

/**
 * "Custom 404 page."
 */
function FourOhFour() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-7/12 md:w-4/12 lg:w-4/12">
        <CatSvg />
      </div>
      <div className="text-5xl font-dark font-bold">404</div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

export default FourOhFour;
