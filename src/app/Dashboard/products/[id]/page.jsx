import React from 'react'
import Image from 'next/image'
import { fetchproduct } from '../../../lib/data'
import { updateproduct } from '../../../lib/actions'
const Viewuserpage = async ({ params }) => {
  const { id } = params;
  const product = await fetchproduct(id);
  return (
    <div>
      <div className='grid grid-cols-12 gap-10 p-6 '>
        <div className='col-span-4 bg-[var(--bgSoft)] max-h-fit p-4'>
          <div className='w-full h-60 relative' >
              <Image alt='dd' src={'/TESTI2.png'}  className=' object-cover ' fill />

          </div>
          <h1 className='text-xl font-bold my-4'>{product.title}</h1>
        </div>
        <div className='col-span-8 '>
          <form action={updateproduct}>
              <div className='grid grid-cols-12 gap-2'>
              <input type="hidden" name='id' value={product.id} />
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >product title</label> <input type="text" placeholder={product.title} name='title' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >product color</label> <input type="text" placeholder={product.color} name='color' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >product size</label> <input type="text" placeholder={product.size} name='size' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
          {/* <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >select category</label> <select name="category_id" id="" className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4'>
            <option value="1">mok</option>
            <option value="1">mok</option>
            <option value="1">mok</option>
              </select>
              

                </div> */}
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >Price</label> <input type="number" placeholder={product.price}  name='price' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >stok </label> <input type="number" placeholder={product.stoke} name='stoke' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-12 my-4 flex flex-col '><label htmlFor="" >product description</label> <textarea  rows={5} placeholder={product.description} name='description' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>              
                <div className='col-span-12 my-4 flex flex-col '><button className='bg-emerald-600 hover:bg-emerald-800 text-white font-bold text-2xl p-4'>submit</button></div>              

                      </div> 
         </form>
        </div>
      </div>
    </div>
  )
}

export default Viewuserpage
