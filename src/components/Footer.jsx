import React from 'react'
import { assets } from '../assets/assets'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white px-4 sm:px-12 md:px-20'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
 
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            We're dedicated to bringing you quality products with fast delivery and top-notch customer service. 
            Your satisfaction is our priority.
          </p>

          <div className='flex gap-4 mt-5 text-gray-600 text-lg'>
            <FaInstagram className='hover:text-black cursor-pointer' />
            <FaTwitter className='hover:text-black cursor-pointer' />
            <FaFacebookF className='hover:text-black cursor-pointer' />
          </div>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'>About Us</li>
            <li className='hover:underline cursor-pointer'>Delivery</li>
            <li className='hover:underline cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>


        <div>
          <p className='text-xl font-medium mb-5'>Support</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:underline cursor-pointer'>Help Center</li>
            <li className='hover:underline cursor-pointer'>Contact Us</li>
            <li className='hover:underline cursor-pointer'>Returns</li>
            <li className='hover:underline cursor-pointer'>Terms of Service</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
