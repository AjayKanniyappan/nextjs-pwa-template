import Head from 'next/head';
import { BottomNav, Footer, Header } from '@components/index';

/**
 * It's a React component that renders a page with a header, footer, and bottom navigation
 * @param  - title - The title of the page.
 * @returns A React component that renders a header, footer, and main content.
 */
function Page({ title, className, children }: cat.PageProps): JSX.Element {
  const pageTitle = title === 'Home' ? 'Cats Realm' : `Cats Realm | ${title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main>
        <article className={className}>{children}</article>
      </main>
      <BottomNav />
      <Footer />
    </>
  );
}

export default Page;
