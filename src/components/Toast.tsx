import { useEffect, useState } from 'react';
import { CrossSvg } from '@svg/index';

function Toast({ message, show, type }: cat.Toaster): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(type, show);
  const [fade, setFade] = useState<boolean>(show);

  useEffect(() => {
    setFade(show);
  }, [show]);

  const handleXClick = () => {
    setFade(false);
  };

  const test = (
    <div
      className={`absolute flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow top-4 right-3 dark:text-gray-400 dark:bg-gray-800 transition-all duration-400 ease-in ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <CrossSvg className="w-5 h-5" />
        <span className="sr-only">Error icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <button
        onClick={handleXClick}
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span className="sr-only">Close</span>
        <CrossSvg className="w-5 h-5" />
      </button>
    </div>
  );

  return (
    <>
      {fade ? test : ''}
      {/* <button type="button" onClick={handleMenuClick}>
        Menu
      </button> */}
    </>
  );
}

export default Toast;
