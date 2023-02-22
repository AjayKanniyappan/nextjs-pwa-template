import Link from 'next/link';
import { DOCS_URL } from '@constants/index';
import styles from '@styles/Home.module.css';

function Home(): JSX.Element {
  /* eslint-disable no-console */
  console.log('%cHi There👋, Im Ajay👨‍💻', 'font-size: 25px;');
  console.log(`%cCheck out my code here: ${DOCS_URL}`, 'font-size:15px');
  console.log('%cAs long as you are winning it is a good day🎯', 'font-size: 20px;');

  return (
    <div className={styles.containers}>
      <h1 className={styles.heading}>The Next.js Progressive Web App Template</h1>
      <br />
      <h2 className={styles.content}>
        A Solid Foundation for Building Scalable and Efficient Progressive Web Application!
      </h2>
      <br />
      <div className="mt-10">
        <Link href={DOCS_URL} className={`group ${styles.link}`} target="_blank" rel="noreferrer">
          <span className={styles.border} />
          <span className={`group-hover:bg-opacity-0 duration-400 ${styles.btn}`}>
            <span className={styles.text}>Get Started</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
