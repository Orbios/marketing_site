import type {AppProps} from 'next/app';
import {useEffect} from 'react';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.scss';

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    const script = document.createElement('script');

    script.src = '../js/main.js';
    script.async = true;

    document.body.appendChild(script);
    scripts.push(script);

    return () => {
      scripts.forEach(script => {
        document.body.removeChild(script);
      });
    };
  });

  return (
    <>
      <Head>
        <title>Orbios</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Orbios marketing site" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
