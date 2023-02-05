import { useEffect, useState } from 'react';
import Image from 'next/image';
import { factsApi } from '@services/index';

function Card({ count }: cat.Count): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [facts, setFacts] = useState<string[] | any>([]);

  useEffect(() => {
    (async () => {
      const getFacts = await factsApi(count);
      setFacts(getFacts.data);
    })();
  }, [count]);

  return (
    <div className="my-8 mb-20 max-w-xs p-4 rounded-xl shadow-2xl bg-[#f9f7f3] dark:bg-[#212121] dark:border-[#393941] dark:text-[#434242] md:max-w-lg lg:max-w-xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <Image
            src="/icons/icon-maskable-512x512.png"
            alt="Cat pictures"
            width={200}
            height={200}
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-6 space-x-6">
          <div>
            <h3 className="text-xl text-center font-semibold dark:text-violet-400">
              Do you know the facts
            </h3>
          </div>
          <ul className="list-outside list-disc dark:text-gray-200">
            {facts.map((fact: never) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
