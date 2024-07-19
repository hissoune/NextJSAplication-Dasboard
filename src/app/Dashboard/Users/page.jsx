import React from 'react'
import Image from 'next/image'
import Search from '../../ui/Dashboard/search/Search'
import Pagination from '../../ui/Dashboard/pagination/Pagination'
import Link from 'next/link';
import { fetchusers } from '../../lib/data';
import {deleteuser} from '../../lib/actions'

const Userspage = async ({ searchParams }) => {
  const q = searchParams.q || "";
  const page = searchParams?.page || 1;
  const userdata = fetchusers(q, page);
  // console.log( (await userdata).countt);
  return (
    <div className='p-8 bg-[var(--bgSoft)] my-10'>
      <div className='flex justify-between'>
        <Search placeholder={'Search for a user ...'} />
        <Link href="/Dashboard/Users/add">
         <button className='p-2 bg-blue-500 text-white rounded'>Add User</button>

        </Link>

      </div>
       <table className="min-w-full   bg-[var(--bgSoft)] rounded-md my-6">
                <thead>
                    <tr className="">
                        <th className="py-2 px-4 ">Name</th>
                        <th className="py-2 px-4 ">Email</th>
                        <th className="py-2 px-4 ">created at</th>
                        <th className="py-2 px-4 ">Role</th>
                        <th className="py-2 px-4 ">Status</th>
                        <th className="py-2 px-4 ">Action</th>
                    </tr>
                </thead>
        <tbody>
          
          { (await userdata).users?.map((User) => (
            <tr key={User.id}>
                       
                    <td className="py-4 px-4 flex gap-4">
                          <Image alt="dd" src={'/TESTI2.png'} width={50} height={50} className="rounded-full " />
                          <h4 className='my-3'>{User.username}</h4>
                        
                      </td>
              <td className="py-4 px-4 ">{User.email}</td>
              <td className="py-4 px-4 ">{User.created_at}</td>
              <td className="py-4 px-4 ">{(User.isadmin)?'asmin':'gay' }</td>
                        <td className="py-4 px-4 ">{(User.isactive)?'active':'passive' }</td>
            <td className="py-4 px-4 flex">
              <Link href={"/Dashboard/Users/"+User.id}><button className='p-2 mx-2 bg-green-500 text-white rounded'>View</button></Link>
                          
                  <form action={deleteuser}>
                   <input type="hidden" name="id" value={User.id} />
                   <button className='p-2 bg-red-500 text-white rounded'>delete</button>
                </form>
              </td>
                  </tr>
          ))} 
                    
                
                    {/* Add more rows as needed */}
                </tbody>
      </table>
       <Pagination count={(await userdata).countt} /> 
    </div>
  )
}

export default Userspage;

