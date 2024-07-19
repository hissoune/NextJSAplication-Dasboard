import React from 'react';
import Sidbar from '../ui/Dashboard/Sidbar/Sidbar';
import Navbar from '../ui/Dashboard/Navbar/Navbar';
import Footer from '../ui/Dashboard/footer/Footer';
function Layout({children}) {
    return (
      
      <div className='flex w-full'>
          
            <div className='hidden lg:block lg:w-1/4  '>
               
          <Sidbar />  
          </div>
          <div className='w-full lg:w-2/3 m-10 '>
              <Navbar />
          {children}
          <Footer/>
          </div>
    </div>
  )
}

export default Layout
