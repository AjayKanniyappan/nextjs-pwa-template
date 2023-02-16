import { StarSvg } from '@svg/index';

/**
 * It's a React component that takes a count prop and returns a JSX element.
 * function Ratings({ count }: cat.RatingsProps): JSX
 * @param  - cat.RatingsProps
 * @returns An array of StarSvg components.
 */
function Ratings({ count }: cat.RatingsProps): JSX.Element {
  return (
    <>
      {Array.from({ length: 5 }, (_, i: number) => (
        <StarSvg
          key={i}
          className={`w-5 h-5 ${
            count >= i + 1 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'
          }`}
        />
      ))}
    </>
  );
}

export default Ratings;
