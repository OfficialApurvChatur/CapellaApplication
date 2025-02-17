import React from 'react'
import brand from '@/love/dFunction/gBrand';


const Loader = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen body-font bg-[#99EEDF] dark:bg-[#008970] text-[#008970] dark:text-[#99EEDF]">          
      <img src={brand().logo} alt={brand().name} className='w-1/12' />
      {text || "Loading..."}
    </div>
  )
}

export default Loader