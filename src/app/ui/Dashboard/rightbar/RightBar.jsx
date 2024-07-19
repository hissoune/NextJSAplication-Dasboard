"use client"
import React from 'react'
import Image from 'next/image'

function RightBar() {
  return (
    <div className='fixed  w-1/4 h-full '>
          <div className='relative p-8 bg-gradient-to-t from-[#182237] to-[#253352] my-6 rounded-md w-full'>
              <div className=' absolute bottom-0 right-0 w-20 h-20 '>
                  
                 <Image alt='dd' src={'/TESTI2.png'}  className='rounded-full object-cover opacity-30' fill />
                 
              </div>
               <div className='flex flex-col gap-6'>
                  <span className='font-bold ' >dfghjklkjhgfdfghjkjhghjkjhghjjhg</span>
                  <h3 className=''>khtk khtk khtk kht kjjtrtrt</h3>
                  <span>dddddddddddddddddgfddfghjk</span>
                  <p className='overflow-ellipsis overflow-hidden whitespace-nowrap'>kjhghjkjmkkljhvgcfhioihvjgcvkbhvgcfgjkbhvg</p>
                  <button className='px-4 py-2 bg-blue-500 text-white rounded max-w-20'>watch</button>
              </div>
              
          </div>
            <div className='relative p-8 bg-gradient-to-t from-[#182237] to-[#253352] my-6 rounded-md w-full'>
              <div className=' absolute bottom-0 right-0 w-20 h-20 '>
                  
                 <Image alt='dd' src={'/TESTI2.png'}  className='rounded-full object-cover opacity-30' fill />
                 
              </div>
               <div className='flex flex-col gap-6'>
                  <span className='font-bold ' >dfghjklkjhgfdfghjkjhghjkjhghjjhg</span>
                  <h3 className=''>khtk khtk khtk kht kjjtrtrt</h3>
                  <span>dddddddddddddddddgfddfghjk</span>
                  <p className='overflow-ellipsis overflow-hidden whitespace-nowrap'>kjhghjkjmkkljhvgcfhioihvjgcvkbhvgcfgjkbhvg</p>
                  <button className='px-4 py-2 bg-blue-500 text-white rounded max-w-20'>watch</button>
              </div>
              
          </div>
         
    </div>
  )
}

export default RightBar
