"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { IoMdSearch } from "react-icons/io";
import { MdPublic } from "react-icons/md";

function Navbar() {
      const pathname = usePathname();

  return (
    <div className='flex justify-between bg-[var(--bgSoft)] p-4 rounded'>
      <div className='p-4'>
        {pathname.split("/").pop()}
      </div>
        <div className='flex gap-4'>
      <div className='flex justify-center bg-[#2e374a] p-4 rounded-md gap-4'>
       
          <IoMdSearch size={20}/>
          <input type="text" placeholder='fuck you ' className='bg-inherit text-[var(--text)]' />
      
       
      </div>
       <div className='flex gap-3 p-4' >
          <MdPublic size={20}/>
          <MdPublic size={20}/>
          <MdPublic size={20}/>
        </div>
        </div>
    </div>
  )
}

export default Navbar
