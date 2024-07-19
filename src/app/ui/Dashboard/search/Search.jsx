 "use client"

import { usePathname, useSearchParams,useRouter } from 'next/navigation';
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { useDebouncedCallback } from 'use-debounce';

function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
 
  const handelsearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
     params.set('page',1);
    if (e.target.value && e.target.value.length > 2) {
      params.set('q', e.target.value);

    } else {
      params.delete('q');
      
    
    }
    replace(`${pathname}?${params}`);
  }, 300);
 
  return (
    <div>
        <div className='flex justify-center bg-[#2e374a] p-3 rounded-md gap-4'>
       
          <IoMdSearch size={20}/>
          <input type="text" placeholder={placeholder} className='bg-inherit text-[var(--text)]'onChange={handelsearch}/>
      
       
      </div>
    </div>
  )
}

export default Search
