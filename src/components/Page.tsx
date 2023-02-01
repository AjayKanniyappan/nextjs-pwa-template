import Head from 'next/head';
import BottomNav from '@components/BottomNav';
import Footer from './Footer';

interface Props {
  title: string;
  children: React.ReactNode;
}

function Page({ title, children }: Props) {
  return (
    <>
      {title ? (
        <Head>
          <title>Cats</title>
        </Head>
      ) : (
        <Head>
          <title>Cats</title>
        </Head>
      )}

      <main className="mx-auto max-w-screen-md pt-20 pb-16 sm:pb-0">
        <div className="p-6">{children}</div>
      </main>

      <BottomNav />
      <Footer />
    </>
  );
}

export default Page;
