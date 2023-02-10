import { CrossSvg } from '@svg/index';

function Toasts({ message, setToast, toast, type }: cat.Toaster): JSX.Element {
  const handleClose = () => {
    setToast(false);
  };

  const danger = (
    <div
      className={`absolute flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow top-4 right-3 dark:text-gray-400 dark:bg-gray-800 transition-all duration-1000 delay-300 ease-in-out ${
        toast ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <CrossSvg className="w-5 h-5" />
        <span className="sr-only">Error icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <button
        onClick={handleClose}
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span className="sr-only">Close</span>
        <CrossSvg className="w-5 h-5" />
      </button>
    </div>
  );

  return <span>{toast && type === 'danger-toast' ? danger : null}</span>;
}

export default Toasts;
