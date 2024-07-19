import React from 'react'
import Image from 'next/image'
import { fetchuser } from '../../../lib/data'
import {updateuser} from '../../../lib/actions'
const  Viewuserpage = async ({ params })=> {
  const { id } = params;
  const user =await  fetchuser(id);
  // console.log(user);
  return (
    <div>
      <div className='grid grid-cols-12 gap-10 p-6 '>
        <div className='col-span-4 bg-[var(--bgSoft)] max-h-fit p-4'>
          <div className='w-full h-60 relative' >
              <Image alt='dd' src={'/TESTI2.png'}  className=' object-cover ' fill />

          </div>
          <h1 className='text-xl font-bold my-4'>{user.username}</h1>
        </div>
        <div className='col-span-8'>
          <form action={updateuser}>
              <div className='grid grid-cols-12 gap-2'>
                <input type="hidden" name='id' value={user.id} />
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User name</label> <input type="text" placeholder={user.username} name='username' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User Email</label> <input type="text" placeholder={user.email} name='email' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User Password</label> <input type="password" placeholder='user password' name='password' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User Phone</label> <input type="number" placeholder={user.phone} name='phone' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >select Role</label> <select name="isadmin" id="" defaultValue={user.isadmin ? "1" : "0"} className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4'>
             <option value="0" selected={!user.isadmin}>mok</option>
                        <option value="1" selected={user.isadmin}>khtk</option>
            
              </select>
              

                  </div>
                   <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >status</label> <select name="isactive" id="" className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4'>
                        <option value="0" selected={!user.isactive}>mok</option>
                        <option value="1" selected={user.isactive}>khtk</option>
                        
                        </select>
                        

                </div>
                <div className='col-span-12 my-4 flex flex-col '><button className='bg-emerald-600 hover:bg-emerald-800 text-white font-bold text-2xl p-4'>add user</button></div>              

                      </div> 
         </form>
        </div>
      </div>
    </div>
  )
}

export default Viewuserpage
