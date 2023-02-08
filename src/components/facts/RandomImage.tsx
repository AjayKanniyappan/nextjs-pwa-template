import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getImages } from '@services/index';
import { factImage } from '@common/data';

/**
 * It fetches a random image from thecatapi.com and displays it
 * @param  - cat.Count
 * @returns A React component that displays a random cat image.
 */
function RandomImage({ count }: cat.Count): JSX.Element {
  const [image, setImage] = useState<cat.FactImage>(factImage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setImage((await getImages(count))[0]);
        setIsError(false);
      } catch (error) {
        setImage(factImage);
        setIsError(true);
      }
    })();
  }, [count]);

  return (
    <Image
      className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      src={image.url}
      alt="Cat pictures"
      height={200}
      width={200}
      unoptimized
    />
  );
}

export default RandomImage;
