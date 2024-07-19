"use client"
import React from 'react'
import { usePathname, useSearchParams,useRouter } from 'next/navigation';

function Pagination({ count }) {
  
   const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;
      const ITEM_PERPAGE = 5;
  const hasprev = ITEM_PERPAGE * (parseInt(page) - 1) > 0;
  const hasnext = ITEM_PERPAGE * (parseInt(page) - 1) + ITEM_PERPAGE < count;
 const handelChangepage =(type) =>{
   type == "prev" ?
     
     params.set("page", parseInt(page) - 1) 
     : params.set("page", parseInt(page) + 1);
   replace(`${pathname}?${params}`);
 }
  return (
    <div className='flex justify-between'>
<button
  className={`p-2 text-white rounded ${hasprev ? 'bg-slate-100' : 'cursor-not-allowed bg-gray-500'}`}
  onClick={() => {
    if (hasprev) {
      handelChangepage("prev");
    }
  }}
  disabled={!hasprev}
>
  Prev
</button>
      <button className={`p-2 bg-gray-500 text-white rounded ${hasnext ? 'bg-slate-100' : 'cursor-not-allowed bg-gray-500'}`}  onClick={() => {
    if (hasnext) {
      handelChangepage("next");
    }
  }}
  disabled={!hasnext} >Next</button>

    </div>
  )
}

export default Pagination
