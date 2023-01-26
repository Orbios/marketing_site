import type {AppProps} from 'next/app';
import {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.scss';

//TODO use better solution for loading scripts
const SCRIPTS = ['bootstrap.bundle.min.js', 'tiny-slider.js', 'glightbox.min.js', 'rellax.min.js', 'aos.js', 'main.js'];

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    SCRIPTS.forEach((scriptName: string) => {
      const script = document.createElement('script');

      script.src = `../js/${scriptName}`;
      script.async = true;

      document.body.appendChild(script);
      scripts.push(script);
    });

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
