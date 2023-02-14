import Link from 'next/link';
import Image from 'next/image';
import { FLAGS_URL } from '@constants/index';
import { WikipediaSvg } from '@svg/index';
import Ratings from './Ratings';

function Details({ currentBreed }: cat.DetailsProps) {
  return (
    <div className="space-y-6 space-x-6">
      <span className="flex items-center pt-3 text-xs font-medium tracking-widest uppercase dark:text-violet-400">
        <Image
          className="mr-2"
          src={`${FLAGS_URL}/${currentBreed.country_code.toLocaleLowerCase()}.svg`}
          alt={currentBreed.country_code}
          width={20}
          height={20}
          unoptimized
        />
        {currentBreed?.origin}
      </span>
      <div>
        <h3 className="text-xl text-center font-semibold dark:text-violet-400">
          {currentBreed?.name}
        </h3>
      </div>
      <p className="list-outside list-disc dark:text-gray-200">{currentBreed?.description}</p>
      <hr />
      <p className="list-outside list-disc dark:text-gray-200">{currentBreed?.temperament}</p>
      <p className="text-white">Adaptability</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.adaptability} />
      </div>
      <p className="text-white">Affection Level</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.affection_level} />
      </div>
      <p className="text-white">Child Friendly</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.child_friendly} />
      </div>
      <p className="text-white">Dog Friendly</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.dog_friendly} />
      </div>
      <p className="text-white">Energy Level</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.energy_level} />
      </div>
      <p className="text-white">Grooming</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.grooming} />
      </div>
      <p className="text-white">Health Issues</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.health_issues} />
      </div>
      <p className="text-white">Energy Level</p>
      <div className="flex items-center">
        <Ratings count={currentBreed.energy_level} />
      </div>
      <Link
        href="/"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <WikipediaSvg className="w-4 h-4 ml-2 -mr-1 fill-white" />
        Read more
      </Link>
    </div>
  );
}

export default Details;
