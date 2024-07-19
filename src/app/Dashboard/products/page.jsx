import React from 'react'
import Search from '../../ui/Dashboard/search/Search'
import Pagination from '../../ui/Dashboard/pagination/Pagination'
import Link from 'next/link';
import Image from 'next/image'
// import {searchParams} from 'next/navigation'
import { fetchproducts } from '../../lib/data';
import {deleteproduct} from '../../lib/actions'

const productspage = async({searchParams}) =>{
  const q = searchParams.q || "";
  const page = searchParams?.page || 1;
  const productData =await fetchproducts(q, page);
  return (
    <div className='p-8 bg-[var(--bgSoft)] my-10'>
      <div className='flex justify-between'>
        <Search placeholder={'Search for a Product ...'} />
        <Link href="/Dashboard/products/add">
         <button className='p-2 bg-blue-500 text-white rounded'>Add Product</button>

        </Link>

      </div>
       <table className="min-w-full   bg-[var(--bgSoft)] rounded-md my-6">
                <thead>
                    <tr className="">
                        <th className="py-2 px-4 ">Title</th>
                        <th className="py-2 px-4 ">Description</th>
                        <th className="py-2 px-4 ">Price</th>
                        <th className="py-2 px-4 ">created at</th>
                        <th className="py-2 px-4 ">Stok</th>
                        <th className="py-2 px-4 ">Action</th>
                    </tr>
                </thead>
        <tbody>
           { (await productData).products?.map((Product) => (
                    <tr key={Product.id}>
                       
                    <td className="py-4 px-4 flex gap-4">
                          <Image alt="dd" src={'/TESTI2.png'} width={50} height={50} className="rounded-full " />
                 <h4 className='my-3'>{Product.title}</h4>
                        
                      </td>
                        <td className="py-4 px-4 "> productproductproductproductproductproduct</td>
                        
                        <td className="py-4 px-4 ">99</td>
                        <td className="py-4 px-4 ">12/04/1999</td>
                        <td className="py-4 px-4 ">56</td>
            <td className="py-4 px-4 flex">
              <Link href={`/Dashboard/products/${Product.id}`}><button className='p-2 mx-2 bg-green-500 text-white rounded'>View</button></Link>
                 <form action={deleteproduct}>
                   <input type="hidden" name="id" value={Product.id} />
                   <button className='p-2 bg-red-500 text-white rounded'>delete</button>
                 </form>
                      </td>
                  </tr>
              ))} 
                 {/* <tr>
                       
                    <td className="py-4 px-4 flex gap-4">
                          <Image alt="dd" src={'/TESTI2.png'} width={50} height={50} className="rounded-full " />
                          <h4 className='my-3'>  Status value</h4>
                        
                      </td>
                        <td className="py-4 px-4 "> productproductproductproductproductproduct</td>
                        
                        <td className="py-4 px-4 ">99</td>
                        <td className="py-4 px-4 ">12/04/1999</td>
                        <td className="py-4 px-4 ">56</td>
                        <td className="py-4 px-4 ">
                          <button className='p-2 mx-2 bg-green-500 text-white rounded'>View</button>
                          <button className='p-2 bg-red-500 text-white rounded'>View</button>
                      </td>
          </tr>
           <tr>
                       
                    <td className="py-4 px-4 flex gap-4">
                          <Image alt="dd" src={'/TESTI2.png'} width={50} height={50} className="rounded-full " />
                          <h4 className='my-3'>  Status value</h4>
                        
                      </td>
                        <td className="py-4 px-4 "> productproductproductproductproductproduct</td>
                        
                        <td className="py-4 px-4 ">99</td>
                        <td className="py-4 px-4 ">12/04/1999</td>
                        <td className="py-4 px-4 ">56</td>
                        <td className="py-4 px-4 ">
                          <button className='p-2 mx-2 bg-green-500 text-white rounded'>View</button>
                          <button className='p-2 bg-red-500 text-white rounded'>View</button>
                      </td>
                  </tr> */}
                    {/* Add more rows as needed */}
                </tbody>
      </table>
             <Pagination count={(await productData).countt} /> 

    </div>
  )
}

export default productspage
