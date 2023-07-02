import '@/styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    if (Component.protected && !token) {
      // If the component is protected and no token is present, redirect to the home page
      router.push('/');
    } else if (Component.protected && token) {
      // If the component is not protected and a token is present, redirect to the dashboard
      router.push('/dashboard');
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
