import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      

        {/* ----------- Left Section ----------- */}
       <div>
        <img className='mb-5 w-40' src={assets.ap_logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Apohealth is committed to transforming healthcare access through technology, compassion, and clarity. Whether you're booking appointments, managing prescriptions, or exploring trusted health resources, we’re here to support every step of your wellness journey. Together, let’s build a healthier tomorrow. 
        </p>
       </div>
        
        {/* ----------- Center Section ----------- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

         {/* ----------- Right Section ----------- */}
         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>Apohealth@example.come</li>
            </ul>
         </div>
      </div>
      
      {/* ---------------- Copyright Text ----------------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Apohealth - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
