import { useEffect, useState } from 'react';
import { getFacts } from '@services/index';
import { facts } from '@common/content';
import RandomImage from './RandomImage';
import Toaster from '../Toasts';

function FactCard({ count }: cat.Count): JSX.Element {
  const [randomFact, setRandomFact] = useState<cat.Facts>(facts);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setRandomFact(await getFacts(`/?count=${count}`));
        setIsError(false);
      } catch (error) {
        setRandomFact(facts);
        setIsError(true);
      }
    })();
  }, [count]);

  return (
    <div className="my-8 mb-20 max-w-xs p-4 rounded-xl shadow-2xl bg-[#f9f7f3] dark:bg-[#212121] dark:border-[#393941] dark:text-[#434242] md:max-w-lg lg:max-w-xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <RandomImage count="/" />
        </div>
        <div className="space-y-6 space-x-6">
          <div>
            <h3 className="text-xl text-center font-semibold dark:text-violet-400">
              Do you know the facts
            </h3>
          </div>
          <ul className="list-outside list-disc dark:text-gray-200">
            {randomFact?.data.map((fact) => (
              <li key={fact.length}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
      <Toaster
        toast={isError}
        setToast={setIsError}
        message="Error to fetch facts"
        type="danger-toast"
      />
    </div>
  );
}

export default FactCard;
