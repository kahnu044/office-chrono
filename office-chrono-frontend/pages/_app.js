import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title || 'Office Chrono - A new way of Singing'}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}