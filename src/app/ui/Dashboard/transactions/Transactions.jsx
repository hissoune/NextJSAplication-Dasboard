import React from 'react'
import Image from 'next/image'

function Transactions() {
  return (
     <div className="overflow-x-auto my-6">
            <table className="min-w-full   bg-[var(--bgSoft)] rounded-md">
                <thead>
                    <tr className="">
                        <th className="py-2 px-4 ">Name</th>
                        <th className="py-2 px-4 ">Status</th>
                        <th className="py-2 px-4 ">Date</th>
                        <th className="py-2 px-4 ">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       
                    <td className="py-4 px-4 flex gap-4">
                          <Image alt="dd" src={'/TESTI2.png'} width={50} height={50} className="rounded-full " />
                          <h4 className='my-3'>  Status value</h4>
                        
                      </td>
                        <td className="py-4 px-4 "><span className='bg-[#afd6ee75] text-[14px]  outline-1 w-auto p-1 rounded-md'>done</span></td>
                        <td className="py-4 px-4 ">Date value</td>
                        <td className="py-4 px-4 ">Amount value</td>
                  </tr>
                  <tr>
                      <td className="py-4 px-4 flex gap-4">
                          <Image alt="dd" src={'/TESTI2.png'} width={50} height={50} className="rounded-full " />
                          <h4 className='my-3'>  Status value</h4>
                        
                      </td>
                        <td className="py-4 px-4 "><span className='bg-[#ff762175] text-[14px]  outline-1 w-auto p-1 rounded-md'>pending</span></td>
                        <td className="py-4 px-4 ">Date value</td>
                        <td className="py-4 px-4 ">Amount value</td>
                  </tr>
                  <tr>
                       <td className="py-4 px-4 flex gap-4">
                          <Image alt="dd" src={'/TESTI2.png'} width={50} height={50} className="rounded-full " />
                          <h4 className='my-3'>  Status value</h4>
                        
                      </td>
                        <td className="py-4 px-4 "><span className='bg-[#ff241c75] text-[14px]  outline-1 w-auto p-1 rounded-md'>canceled</span></td>
                        <td className="py-4 px-4 ">Date value</td>
                        <td className="py-4 px-4 ">Amount value</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
  )
}

export default Transactions
