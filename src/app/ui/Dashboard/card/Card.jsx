import React from 'react'
import Image from 'next/image'
function Card() {
    return (
        <div>
            <div className='flex justify-center rounded-md bg-[var(--bgSoft)] w-full p-2 cursor-pointer hover:bg-[#2e374a]'>
                <div><Image alt='dd' src={'/TESTI2.png'} width={30} height={30} className='rounded-full mx-6 my-4'/></div>
            <div className='flex flex-col  '>
                 
            <span>Total users</span>
            <span> 10.44</span>
            <span><span>more than previouse </span></span>
                </div>
                </div>
     </div>
  )
}

export default Card
