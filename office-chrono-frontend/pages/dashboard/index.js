import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {

  const router = useRouter();

  const handleLogout = async () => {

    // Remove the token
    localStorage.removeItem('token');

    // Redirect to homepage
    router.push('/');
  }


  // useEffect(() => {
  // }, []);

  return (
    <>
      <div>

        <section className='flex justify-between m-2 items-center'>
          <h4>Dashboard</h4>
          <button
            className='bg-green-800 p-3 mr-3 rounded'
            onClick={handleLogout}
          >
            Logout
          </button>
        </section>

      </div>
    </>
  )
};

export default Dashboard;