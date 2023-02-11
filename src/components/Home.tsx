import Link from 'next/link';
import { DOCS_URL } from '@constants/index';

function Home(): JSX.Element {
  return (
    <div className="container py-24 px-10 mx-0 min-w-full flex flex-col items-center">
      <h1 className="text-5xl py-6 text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black md:text-6xl mt-14">
        The Next.js Progressive Web App Template
      </h1>
      <br />
      <h2 className="text-center text-xl text-[#888]">
        A Complete Foundation for Building Robust PWA Apps
      </h2>
      <br />
      <div className="mt-10">
        <Link
          href={DOCS_URL}
          className="relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-lg shadow-2xl"
          target="_blank"
          rel="noreferrer"
        >
          <span className="w-full h-full animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 absolute" />
          <span className="relative px-24 py-3 transition-all ease-out bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-[#111] dark:text-white dark:group-hover:text-[#fffbf9]">
              Get Started
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
