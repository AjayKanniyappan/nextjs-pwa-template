import Link from 'next/link';
import { useRouter } from 'next/router';
import { bottomNavigation } from '@common/navigation';
import styles from '@styles/BottomNav.module.css';

/**
 * It's a React component that renders a bottom navigation bar with links to the home page, the facts
 * page, and the breeds page.
 * It maps over the array of objects in the useBottomNavigation hook and returns a Link component for
 * each object.
 * @returns A JSX.Element
 */
function BottomNav(): JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navBox}>
          {bottomNavigation.map((links) => (
            <Link
              key={links.id}
              href={links.href}
              className={`${styles.link} ${
                router.pathname === links.href ? styles.primary : styles.secondary
              }`}
            >
              {links.icon}
              <span className={styles.linkName}>{links.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default BottomNav;
