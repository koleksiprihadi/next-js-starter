import Head from 'next/head';
import { useRouter } from 'next/router';

import AuthPage from '../../utils/auth';

export default function Test() {
  const router = useRouter();
  AuthPage(router)
    return (
      <>
      <Head>
        <title>Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      </>
  );
  }