import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="z-[100] flex h-20 w-full flex-row justify-end p-8">
      <Link href="/" passHref className="px-8">
        <span className={router.pathname === '/' ? 'active' : ''}>ABOUT</span>
      </Link>
      <Link href="/events" passHref>
        <span className={router.pathname === '/events' ? 'active' : ''}>
          EVENTS
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
