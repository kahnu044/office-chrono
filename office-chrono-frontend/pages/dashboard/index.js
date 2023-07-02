import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ProtectedRoute from '../../components/ProtectedRoute';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token
    localStorage.removeItem('token');

    // Redirect to the home page
    router.push('/');
  };

  return (
    <ProtectedRoute>
      <>
        <div>
          <section className='flex justify-between m-2 items-center'>
            <h4>Dashboard</h4>
            <button className='bg-green-800 p-3 mr-3 rounded' onClick={handleLogout}>
              Logout
            </button>
          </section>
        </div>
      </>
    </ProtectedRoute>
  );
};

export default Dashboard;