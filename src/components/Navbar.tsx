import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.png'

const Navbar = () => {
  return <nav className='flex items-center justify-between py-3'>
        <Link href="/">
            <div className='flex items-center cursor-pointer'>
                <Image src={logo} alt='logo'/>
                <span className="font-bold ml-2 text-primary">Coder&apos;s Blog</span>
            </div>
        </Link>

        <ul className='flex items-center'>
            <li className='mr-6 font-medium text-gray-600'>
                <Link href="#">Products</Link>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
                <Link href="#">Pricing</Link>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
                <Link href="#">Docs</Link>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
                <Link href="#">Company</Link>
            </li>
        </ul>

        <ul className='flex items-center'>
            <li className='mr-6 font-medium text-gray-600'>
                <Link href="#" className='hover:text-gray-400'>Log in</Link>
            </li>
            <li className='font-medium text-gray-600'>
                <Link href="#" className='bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all'>Sign Up</Link>
            </li>
        </ul>
  </nav>
}

export default Navbar