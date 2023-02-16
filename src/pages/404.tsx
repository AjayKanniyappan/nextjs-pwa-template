import Link from 'next/link';
import { BackArrowSvg, CatFourOFourSvg } from '@svg/index';
import styles from '@styles/404.module.css';

/**
 * "Custom 404 page."
 * It returns a div with a cat SVG, a 404 message, a paragraph, and a link to return home
 * @returns A div with a cat, a 404, and a link to return home.
 */
export default function FourOFour(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <CatFourOFourSvg />
      </div>
      <div className={styles.text}>404</div>
      <div className={styles.content}>
        <p className={styles.bigText}>Page Not Found</p>
        <p className={styles.paragraph}>Sorry, the page you are looking for doesn&lsquo;t exist.</p>
        <Link href="/" className={styles.btn} title="Return Home">
          <BackArrowSvg className="h-5 w-5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
