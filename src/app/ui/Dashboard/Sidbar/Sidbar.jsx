import React from 'react'
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image'

function Sidbar() {
   const menuItems = [
    {
        title: "pages",
        list: [
            {
                title: "dashboard",
                path: "/Dashboard",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" hanging="20px" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 12h18M3 21h18" />
                    </svg>
                )
            },
            {
                title: "users",
                path: "/Dashboard/Users",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" hanging="20px" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A4.985 4.985 0 015 16c0-1.473.683-2.796 1.816-3.645C8.24 11.22 10 10 10 8a3 3 0 00-6 0c0 2-1.76 3.22-3.184 4.355A4.985 4.985 0 010 16c0 .379.037.747.121 1.102M23 16a4.985 4.985 0 01-1.816-3.645C20.76 11.22 19 10 19 8a3 3 0 116 0c0 2 1.76 3.22 3.184 4.355A4.985 4.985 0 0123 16c0 .379-.037.747-.121 1.102" />
                    </svg>
                )
            },
            {
                title: "products",
                path: "/Dashboard/products",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" hanging="20px" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M9 3h6v4H9V3zm9 14H6v4h12v-4z" />
                    </svg>
                )
            },
            {
                title: "transactions",
                path: "/transactions",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" hanging="20px" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.38 0 2.5 1.122 2.5 2.5S13.38 13 12 13s-2.5-1.122-2.5-2.5S10.62 8 12 8zm0-5C6.48 3 2 7.48 2 13s4.48 10 10 10 10-4.48 10-10S17.52 3 12 3z" />
                    </svg>
                )
            },
            
        ]
    },{
                title: "analyze",
                list: [
                        
                    ]
                    },{
                        title: "user",
                list: [
                        
                    ]
                    }
];

  return (
      <div className=" p-8 bg-[var(--bgSoft)] fixed w-96 min-h-screen">
           <div className='flex '> 
              <Image alt='dd' src={'/TESTI2.png'} width={50} height={50} className='rounded-full mx-6' />
              <div className='text-clip font-bold'>
                   <h1>mok</h1>
                    <h1>mok</h1>
              </div>
                   
                </div>
            <ul>
                {menuItems.map((section, index) => (
                    <li key={index} className='my-6'>
                        <span className="title text-2xl font-bold ">. {section.title}</span>
                        {section.list.map(item => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
          </ul>
          <button className='text-xl font-bold hover:text-red-600'>logout</button>
        </div>
  )
}

export default Sidbar
