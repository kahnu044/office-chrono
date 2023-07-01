import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
// Title of the page
// Home.title = 'Office Chrono - A new way of Singing';

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {

    e.preventDefault();

    // API Call here for login


    // If authentication is successful, store the token in local storage
    const token = 'test_token';
    localStorage.setItem('token', token);

    // Redirect to the dashboard page
    router.push('/dashboard');
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-black dark:text-white h-screen flex justify-center items-center ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mx-auto place-self-center lg:col-span-7">

            <form>
              <div
                className="text-center">
                <div className="px-6 sm:px-0 max-w-sm">
                  <button type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Google<div></div></button>
                </div>
              </div>

              <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p
                  className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  className="bg-white border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address" />
              </div>


              <div className="relative mb-6">
                <input
                  type="password"
                  className="bg-white border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="exampleFormControlInput22"
                  placeholder="Password" />
              </div>


              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] "
                    type="checkbox"
                    value=""
                    id="rememberMe" />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password"> Forgot password? </Link>
              </div>

              <div className="text-center lg:text-center">
                <button
                  type="button"
                  className="inline-block rounded-lg bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-700 dark:text-white border border-white-900 hover:border-[#4285F4] shadow-lg "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <Link href="/register"> Register Here </Link>
                </p>
              </div>
            </form>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/user-login-page.png" alt="mockup" style={{ height: "320px" }} />
          </div>
        </div>
      </section>
    </>
  )
}
