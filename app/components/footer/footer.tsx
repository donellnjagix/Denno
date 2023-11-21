import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assuming your logo is in the public directory
import logo from '@/public/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="https://flowbite.com/" passHref>
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              {/* Use Next.js Image component for optimized image loading */}
              <Image src={logo} alt="Flowbite Logo" width={32} height={32} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Normanstone Bank
              </span>
            </a>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" passHref>
                <a className="hover:underline me-4 md:me-6">About</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="hover:underline me-4 md:me-6">Licensing</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link href="https://flowbite.com/" passHref>
            <a className="hover:underline">Flowbite™</a>
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
