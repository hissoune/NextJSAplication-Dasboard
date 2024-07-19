import React from 'react'
import {adduser} from '../../../lib/actions'
function ADDuserpage() {
  return (
    <div  className='bg-[var(--bgSoft)] p-10 my-6'>
       <form action={adduser}>
              <div className='grid grid-cols-12 gap-2'>

              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User name</label> <input type="text" placeholder='user name' name='username' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User Email</label> <input type="text" placeholder='user email' name='email' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User Password</label> <input type="password" placeholder='user password' name='password' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
              <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >User Phone</label> <input type="number" placeholder='user phone' name='phone' className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4 ' /></div>
          <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >select Role</label> <select name="isadmin" id="" className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4'>
            <option value="0">mok</option>
            <option value="1">khtk</option>
            
              </select>
              

                  </div>
                   <div className='col-span-6 my-4 flex flex-col '><label htmlFor="" >status</label> <select name="isactive" id="" className='p-4 bg-[var(--bg)]   rounded-md outline-none text-ellipsis text-white my-4'>
                        <option value="0">mok</option>
                        <option value="1">khtk</option>
                        
                        </select>
                        

                </div>
                <div className='col-span-12 my-4 flex flex-col '><button className='bg-emerald-600 hover:bg-emerald-800 text-white font-bold text-2xl p-4'>add user</button></div>              

                      </div> 
         </form>
    </div>
  )
}

export default ADDuserpage
