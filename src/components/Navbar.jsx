import React, { useContext, useState } from 'react';
import { assets } from "../assets/assets";
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setshowSearch, getCartCount } = useContext(ShopContext);


  return (
    <div>
      <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/home'>
          <img src={assets.logo} className="w-36" alt="Logo" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/home' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          <img src={assets.search_icon} className='w-5 cursor-pointer' 
          alt="Search" onClick={() => setshowSearch(true)} />

          <div className='relative group p-2'>
            <img className='w-5 cursor-pointer' onClick = {() => setshowSearch(true) }src={assets.profile_icon} alt="Profile" />
            <div className='hidden group-hover:block absolute right-0 top-6 z-10 bg-slate-100 shadow-lg rounded-md'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>

          <NavLink to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="Cart" />
            <p className='absolute -top-1 -right-2 w-4 h-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>
              {getCartCount()}

            </p>
          </NavLink>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className='w-5 cursor-pointer sm:hidden'
            alt="Menu"
          />
        </div>
      </div>

      {/* Sidebar menu for smaller screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 ${
          visible ? 'w-full px-6 py-5' : 'w-0 overflow-hidden'
        }`}
      >
        <button onClick={() => setVisible(false)} className='text-xl font-bold mb-4'>
          ✕
        </button>
        <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
          <NavLink to='/home' onClick={() => setVisible(false)}>HOME</NavLink>
          <NavLink to='/collection' onClick={() => setVisible(false)}>COLLECTION</NavLink>
          <NavLink to='/about' onClick={() => setVisible(false)}>ABOUT</NavLink>
          <NavLink to='/contact' onClick={() => setVisible(false)}>CONTACT</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
