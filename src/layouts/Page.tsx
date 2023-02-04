import Head from 'next/head';
import { BottomNav, Footer, Header } from '@components/index';

/**
 * `Page` is a function that takes in a `title` and `children` and returns a `JSX.Element`
 *  It's a layout component
 * @param  - cat.PageProps
 * @returns A JSX element
 */
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
