import Link from 'next/link';
import { AJAY_URL } from '@constants/index';
import { BuyMeaCoffeeSvg } from '@svg/index';
import styles from '@styles/Bmc.module.css';

/**
 * It renders a link to my Buy Me a Coffee page, with a coffee cup SVG inside it
 * @returns A div with a link to buy me a coffee.
 */
function BuyMeaCoffee(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link href={AJAY_URL} title="Buy me a coffee" target="_blank" rel="noreferrer">
        <BuyMeaCoffeeSvg className={styles.btn} />
      </Link>
    </div>
  );
}

export default BuyMeaCoffee;
