import styles from '@styles/Home.module.css';
import BottomNav from '@/components/BottomNav';

export default function Home(): JSX.Element {
  return (
    <>
      <BottomNav />
      <div className={styles.container}>
        <div className="flex items-center justify-center h-screen">
          <div className="text-black font-bold text-xl">Hello World!</div>
        </div>
      </div>
    </>
  );
}
