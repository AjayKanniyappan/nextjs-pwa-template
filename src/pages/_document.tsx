import { Html, Head, Main, NextScript } from 'next/document';
import { Meta } from '@components/index';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <Meta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
