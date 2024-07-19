import React from 'react'
import { authenticate } from '../lib/actions';

function Logingpage() {
  return (
      <div className='flex flex-col justify-center items-center  w-screen h-screen  '>
          <div className='w-1/5 bg-[var(--bgSoft)] p-6 rounded-md'>
          <form action={authenticate}>
              <h1 className='text-center text-2xl font-bold my-6'>LOG IN</h1>
              

              <div className=' my-2 flex flex-col '><label htmlFor="" >User name</label> <input type="text" placeholder='user name' name='username' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white  ' /></div>
              <div className=' my-2 flex flex-col '><label htmlFor="" >User Password</label> <input type="password" placeholder='user password' name='password' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white  ' /></div>
              
                <div className=' mt-6 flex flex-col '><button className='bg-emerald-600 hover:bg-emerald-800 text-white font-bold text-2xl p-4'>Log in </button></div>              

                     
              </form>
              </div>
    </div>
  )
}

export default Logingpage
