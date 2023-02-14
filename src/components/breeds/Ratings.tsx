import { StarSvg } from '@svg/index';

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
