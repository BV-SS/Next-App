import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className='flex flex-row items-center pl-10 gap-5 bg-gray-800 text-white text-lg p-2'>
      <Link href="/" >
      <Image src="/Logo.png" alt="Notes app logo" height={40} width={60} priority className='w-15 h-11.9 cursor-pointer inline '/>
      <span className='text-2xl  pl-5'>Notes App</span>
      </Link>

      <ul className='flex items-center ml-auto gap-6 pr-7'>
      <Link href='/'>Home</Link>
      <Link href='/notes'>Notes</Link>
      <Link href='/notes/new'>Create</Link>
      <Link href='/about'>About</Link>     
      <Link href='/contacts'>Contacts</Link>
      </ul>
    </nav>
  )
}

export default Navbar