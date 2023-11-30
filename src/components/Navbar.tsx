import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex w-full h-20 z-[100] p-8 flex-row justify-end">
            <Link href="/" passHref className='px-8'>
              <span className={router.pathname === '/' ? 'active' : ''}>ABOUT</span>
            </Link>
            <Link href="/events" passHref>
              <span className={router.pathname === '/events' ? 'active' : ''}>EVENTS</span>
            </Link>
    </div>
  )
}

export default Navbar