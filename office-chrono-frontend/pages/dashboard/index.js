import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

const Dashboard = () => {

  return (
    <Layout>
      <ProtectedRoute>
        Dashboard
      </ProtectedRoute>
    </Layout>
  );
};

export default Dashboard;