import type {NextPage} from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Orbios</title>
        <meta name="description" content="Orbios marketing site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Orbios</h2>
    </div>
  );
};

export default Home;
