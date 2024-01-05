import React from 'react'
import Image from 'next/image';
import { FiPhoneCall ,FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn   } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className='w-full bg-slate-200'>
      <div className='max-w-[1280px] flex md:flex-row md:mx-auto md:justify-between py-2 flex-col mx-2'>
        <div className='flex gap-6 items-center text-s md:text-md'>
          <span className='flex align-middle justify-center gap-2'><FiPhoneCall className='text-orange-500'/>+91-7735432994</span>
          <span className='flex align-middle justify-center gap-2'><FiMail  className='text-orange-500'/>info@schoolindia.com</span>
        </div>
        <div className='flex gap-4'>
          <FaFacebookF className='hover:text-orange-500 cursor-pointer'/>
          <FaTwitter className='hover:text-orange-500 cursor-pointer'/>
          <FaLinkedinIn className='hover:text-orange-500 cursor-pointer'/>
        </div>
      </div>
    </div>
    <div className='w-full max-w-[1280px] mx-auto flex justify-between py-4 items-center'>
        <div className='mx-2 md:mx-0'>
          <img src="/assets/schoollogo.png" alt="logo" />
        </div>
        <div>
          <ul className='md:flex gap-6 font-bold grid grid-cols-1 absolute right-0 mt-10 bg-white p-2 rounded-md'>
            <Link href="/" className='active:text-orange-500 hover:text-orange-500'>HOME</Link>
            <Link href="/school-list" className='active:text-orange-500 hover:text-orange-500'>SEARCH SCHOOL</Link>
            <Link href="/create-school" className='active:text-orange-500 hover:text-orange-500'>REGISTER SCHOOL</Link>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar