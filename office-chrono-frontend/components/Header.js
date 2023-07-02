import React from 'react'
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token
    localStorage.removeItem('token');

    // Redirect to the home page
    router.push('/');
  };

  return (
    <>
      <section className='flex justify-between m-2 items-center'>
        <h4>Office Chrono</h4>
        <button className='bg-green-800 p-3 mr-3 rounded' onClick={handleLogout}>
          Logout
        </button>
      </section>
    </>
  )
}

export default Header