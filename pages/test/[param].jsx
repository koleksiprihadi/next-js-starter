import { useRouter } from 'next/router';
import Layout from '../../component/layout/layout';

import AuthPage from '../../utils/auth';

export default function Test() {
  const router = useRouter();
  const { param } = router.query;
  AuthPage(router)
    return (
      <Layout type="khusus">
      <h1>{param}</h1>
      </Layout>
  );
  }