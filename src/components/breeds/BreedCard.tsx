import { useEffect, useState } from 'react';
import { getBreeds } from '@services/index';
import { randomBreed } from '@common/content';
import randomNumber from '@utils/randomNumber';
import Details from './Details';
import Select from './Select';
import Toaster from '../Toasts';

function BreedCard(): JSX.Element {
  const [breed, setBreed] = useState<cat.Breeds>(randomBreed);
  const [number, setNumber] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const breedApi = await getBreeds(`/`);
        setBreed(breedApi);
        setNumber(randomNumber(0, breedApi.length));
        setIsError(false);
      } catch (error) {
        setBreed(randomBreed);
        setNumber(0);
        setIsError(true);
      }
    })();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = breed?.findIndex((snap) => {
      return snap.id === event.target.value;
    });
    setNumber(index);
  };

  return (
    <div className="my-12 p-4 max-w-xs rounded-xl shadow-2xl bg-[#f9f7f3] dark:bg-[#212121] dark:border-[#393941] dark:text-[#434242] md:max-w-lg lg:max-w-xl">
      <Select type="breeds" selected={breed[number]?.id} selectOnChange={handleSelectChange}>
        {breed?.map((snap) => (
          <option key={snap.id} value={snap.id}>
            {snap.name}
          </option>
        ))}
      </Select>
      <Details currentBreed={breed[number]} />
      <Toaster
        toast={isError}
        setToast={setIsError}
        message="Error to fetch Breeds"
        type="danger-toast"
      />
    </div>
  );
}

export default BreedCard;
