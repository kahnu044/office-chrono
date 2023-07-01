import '@/styles/globals.css'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if the token is present in local storage

    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Head>
        <title>{Component.title || 'Office Chrono - A new way of Singing'}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}