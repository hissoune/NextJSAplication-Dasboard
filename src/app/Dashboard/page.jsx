import React from 'react'
import Card from '../ui/Dashboard/card/Card'
import Transactions from '../ui/Dashboard/transactions/Transactions'
import Chart from '../ui/Dashboard/chart/Chart'
import RightBar from '../ui/Dashboard/rightbar/RightBar'
function page() {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-12 gap-20 '>
        <div className='cards col-span-8'>
          <div className='flex justify-between gap-8'>
            <Card/>
            <Card/>
            <Card />
          </div>
          <div>
            <Transactions />
            <Chart/>
          </div>
        </div>
         <div className=' col-span-4 flex flex-col items-center justify-start '>
         <RightBar/>
        </div>
        </div>
    </div>
  )
}

export default page
