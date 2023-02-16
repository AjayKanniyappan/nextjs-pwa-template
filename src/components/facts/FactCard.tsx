import { useEffect, useState } from 'react';
import { getFacts } from '@services/index';
import { facts } from '@common/content';
import styles from '@styles/Fact.module.css';
import RandomImage from './RandomImage';
import Toaster from '../Toasts';

/**
 * @param  - cat.Count
 * @returns A React component that displays a random cat image and facts.
 */
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
    <div className={styles.container}>
      <div className="space-y-4">
        <div className="space-y-2">
          <RandomImage count="/" />
        </div>
        <div className={styles.box}>
          <div>
            <h3 className={styles.heading}>Do you know the facts</h3>
          </div>
          <ul className={styles.list}>
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
