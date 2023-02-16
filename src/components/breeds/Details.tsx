import Link from 'next/link';
import Image from 'next/image';
import { FLAGS_URL } from '@constants/index';
import { WikipediaSvg } from '@svg/index';
import styles from '@styles/Breed.module.css';
import Ratings from './Ratings';

/**
 * It returns a JSX element that displays the details of the current breed
 * @param  - cat.DetailsProps
 * @returns JSX.Element
 */
function Details({ currentBreed }: cat.DetailsProps): JSX.Element {
  return (
    <div className={styles.details}>
      <span className={styles.country}>
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
        <h3 className={styles.breedName}>{currentBreed?.name}</h3>
      </div>
      <blockquote className={styles.description}>
        <p>&quot;{currentBreed?.description}&quot;</p>
      </blockquote>
      <div className={styles.hrBox}>
        <div className={styles.hr} />
      </div>
      <div className={styles.font}>
        <p>{`Average life span ${currentBreed?.life_span} years`}</p>
      </div>
      <div className={styles.font}>
        <p>{currentBreed?.temperament}</p>
      </div>
      <div className={styles.rateCard}>
        <div className={styles.space}>
          <p className={styles.rating}>Adaptability</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.adaptability} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Affection Level</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.affection_level} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Child Friendly</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.child_friendly} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Dog Friendly</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.dog_friendly} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Energy Level</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.energy_level} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Grooming</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.grooming} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Health Issues</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.health_issues} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Intelligence</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.intelligence} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Shedding Level</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.shedding_level} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Social Needs</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.social_needs} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Stranger Friendly</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.stranger_friendly} />
          </div>
        </div>
        <div className={styles.space}>
          <p className={styles.rating}>Vocalisation</p>
          <div className={styles.center}>
            <Ratings count={currentBreed?.vocalisation} />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <Link href={currentBreed?.wikipedia_url} target="_blank" className={styles.wiki}>
          <WikipediaSvg className="w-5 h-5" />
          ikipedia
        </Link>
      </div>
    </div>
  );
}

export default Details;
