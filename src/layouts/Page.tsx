import Head from 'next/head';
import Header from '@/components/Header';
import Coffee from '@/components/Coffee';
import { BottomNav, Footer } from '@components/index';

function Page({ title, children }: cat.PageProps): JSX.Element {
  return (
    <>
      {title === 'Home' ? (
        <Head>
          <title>Cats Realm</title>
        </Head>
      ) : (
        <Head>
          <title>Cats Realm | {title}</title>
        </Head>
      )}
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Coffee />
      <BottomNav />
      <Footer />
    </>
  );
}

export default Page;
