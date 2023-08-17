import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.png'

const Navbar = () => {
   
  return <nav className='h-13 flex p-2 flex-col lg:flex-row md:justify-around lg:justify-between lg:items-center'>
        <Link href="/" >
            <div className='flex py-1 items-center cursor-pointer justify-start'>
                <Image src={logo} alt='logo' width={40} height={40} style={{height:'auto',width:'auto'}} />
                <span className="font-bold ml-2 text-primary">Coder&apos;s Blog</span>
            </div>
        </Link>

        <ul className='flex justify-between m-1'>
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
        <ul className='flex justify-end m-1 py-1'>
            <li className='mr-6 font-medium text-gray-600'>
                <Link href="login" className='hover:text-gray-400 '>Log in</Link>
            </li>
            <li className='font-medium text-gray-600'>
                <Link href="signup" className='bg-primary py-1 px-4 rounded-lg text-white hover:bg-primary-dark transition-all'>Sign Up</Link>
            </li>
        </ul>
  </nav>
}

export default Navbar