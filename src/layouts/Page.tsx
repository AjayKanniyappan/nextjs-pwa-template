import Head from 'next/head';
import Header from '@/components/Header';
import { BottomNav, Footer } from '@/components';

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
      <BottomNav />
      <Footer />
    </>
  );
}

export default Page;
