import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className='flex flex-row items-center pl-10 gap-5 bg-gray-800 text-white text-lg p-4'>
      <Link href='/'>Home</Link>
      <Link href='/notes'>Notes</Link>
      <Link href='/notes/new'>Create</Link>
      <Link href='/about'>About</Link>
      <Link href='/contacts'>Contacts</Link>
    </nav>
  )
}

export default Navbar