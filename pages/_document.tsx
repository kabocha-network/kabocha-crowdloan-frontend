import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mulish&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap"
        />
      </Head>
      <body className="text-black font-sans">
        <Main />
        <div id="modal-root" />
        <NextScript />
      </body>
    </Html>
  );
}
