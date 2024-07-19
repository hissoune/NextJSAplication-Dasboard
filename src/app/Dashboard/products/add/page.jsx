import React from 'react'
import {addproduct} from '../../../lib/actions'

function ADDproductPage() {
  return (
    <div className='bg-[var(--bgSoft)] p-10 my-6'>
          <form action={addproduct}>
              <div className='grid grid-cols-12 gap-2'>

              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >product title</label> <input type="text" placeholder='title' name='title' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >product color</label> <input type="text" placeholder='title' name='color' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >product size</label> <input type="text" placeholder='title' name='size' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
          {/* <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >select category</label> <select name="category_id" id="" className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4'>
            <option value="1">mok</option>
            <option value="1">mok</option>
            <option value="1">mok</option>
              </select>
              

                </div> */}
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >Price</label> <input type="number" placeholder='price'  name='price' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >stok </label> <input type="number" placeholder='stok' name='stoke' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-12 my-4 flex flex-col '><label htmlFor="" >product description</label> <textarea  rows={5} name='description' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>              
                <div className='col-span-12 my-4 flex flex-col '><button className='bg-emerald-600 hover:bg-emerald-800 text-white font-bold text-2xl p-4'>submit</button></div>              

                      </div> 
         </form>
    </div>
  )
}

export default ADDproductPage
