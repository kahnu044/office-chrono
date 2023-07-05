import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header(props) {

  const { toggleProfile, toggleNavbar, isProfileOpen } = props;

  const router = useRouter();

  // Remove the token and redirect to the home page
  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <>

      <header>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-2 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={toggleNavbar}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
                </button>

                <Link href="/dashboard" className="flex ml-2 md:mr-24">
                  {/* <img src="/logo.svg" className="h-8 mr-3" alt="OfficeChrono Logo" /> */}
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">OfficeChrono</span>
                </Link>
              </div>

              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                      onClick={toggleProfile}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img className="w-10 h-10 rounded-full" src="/profile-picture.jpg" alt="User Profile Picture" />
                    </button>
                  </div>
                  <div className={`${isProfileOpen ? 'block' : 'hidden'} z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-3/4 right-0`} id="dropdown-user" >
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-gray-900 dark:text-white" role="none">
                        Kahnu (Admin)
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        admin@officechrono.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">

                      <Link href="/dashboard/auth/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </Link>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" onClick={handleLogout}>Sign out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header