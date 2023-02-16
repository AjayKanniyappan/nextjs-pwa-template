import Link from 'next/link';
import { AUTHOR_URL } from '@constants/index';
import BuyMeaCoffee from '@components/BuyMeaCoffee';
import styles from '@styles/Footer.module.css';

/**
 * It returns a footer with a link to my website
 * @returns JSX.Element
 */
function Footer(): JSX.Element {
  return (
    <>
      <BuyMeaCoffee />
      <div className={styles.container}>
        <footer className={styles.footer}>
          <div className={styles.box}>
            <p className={styles.paragraph}>
              Developed by{' '}
              <Link href={AUTHOR_URL} className={styles.link} target="_blank" rel="noreferrer">
                Ajay Kanniyappan
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
