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
          className="mr-2 rounded-lg"
          src={`${FLAGS_URL}/${currentBreed?.country_code.toLocaleLowerCase()}.svg`}
          alt={currentBreed?.country_code}
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
      <blockquote className="text-lg italic font-medium text-center text-gray-900 dark:text-gray-200">
        <p>&quot;{currentBreed?.description}&quot;</p>
      </blockquote>
      <div className="relative flex items-center">
        <div className="flex-grow mx-24 border-t border-gray-900 dark:border-gray-300" />
      </div>
      <div className="flex justify-center font-mono dark:text-gray-200">
        <p>{`Average life span ${currentBreed?.life_span} years`}</p>
      </div>
      <div className="flex justify-center font-mono dark:text-gray-200">
        <p>{currentBreed?.temperament}</p>
      </div>
      <div className="py-3 space-y-4 italic font-medium">
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Adaptability</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.adaptability} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Affection Level</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.affection_level} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Child Friendly</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.child_friendly} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Dog Friendly</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.dog_friendly} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Energy Level</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.energy_level} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Grooming</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.grooming} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Health Issues</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.health_issues} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Intelligence</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.intelligence} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Shedding Level</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.shedding_level} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Social Needs</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.social_needs} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Stranger Friendly</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.stranger_friendly} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-black dark:text-white">Vocalisation</p>
          <div className="flex items-center">
            <Ratings count={currentBreed?.vocalisation} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={currentBreed?.wikipedia_url}
          target="_blank"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
        >
          <WikipediaSvg className="w-5 h-5" />
          ikipedia
        </Link>
      </div>
    </div>
  );
}

export default Details;
