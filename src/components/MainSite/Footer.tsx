import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between bg-[#072136] text-white lg:mt-16 px-6 py-14 space-y-10 sm:space-y-0'>
        <div className='flex'>
            <img src={"logo-small.png"}  className='relative w-16 h-16' />
            <div className='ml-4'>
                <Link to={"https://www.trivectadigital.com/"} className='text-[#88B7D6] font-semibold'>Trivecta Digital Solutions Pvt Ltd,</Link>
                <div className='mt-4'>
                    <p>DE0, Whispering Heights,</p>
                    <p>#132, St Mary’s Road, Alwarpet,</p>
                    <p>Chennai-600018,</p>
                    <p>India.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div>
                <p className='hover:cursor-pointer text-sm' onClick={(e) => {window.location.href ='mailto:info@trivectadigital.com';}}>info@trivectadigital.com</p>
                <p className='text-sm mt-2'>© {new Date().getFullYear()} by TRIVECTA DIGITAL SOLUTIONS.</p>
            </div>
            <div className='flex space-x-3 mt-3'> 
                <Link to={"https://twitter.com/TrivectaDigital"}>
                    <img src='/twitter.png' >
                    </img>
                </Link>
                <Link to={"https://www.linkedin.com/company/trivectadigital/mycompany/"}>
                    <img src='/linkedin.png' >
                    </img>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer