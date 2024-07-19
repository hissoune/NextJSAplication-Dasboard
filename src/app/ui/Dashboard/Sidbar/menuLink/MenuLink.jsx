 "use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function MenuLink({ item }) {
    const pathname = usePathname();
    // console.log('path :'+ pathname);
  return (
    <div>
          <Link href={item.path} className={`p-6 flex items-center gap-4 hover:bg-[#2e374a] text-xl font-serif ${(pathname==item.path )? 'bg-[#2e374a]':''}`}>
            {item.icon}
            {item.title}
          </Link>
    </div>
  )
}

export default MenuLink;
