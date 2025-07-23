import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { search, setSearch, showSearch, setshowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible,setVisible] = useState(false)

  useEffect(() =>{
    if(location.pathname.includes('collection') && Searchbar){
        setVisible(true);
    }
    else{
        setVisible(false);
    }
},[location])

  // If searchbar should not be visible, return null
//   if (!showSearch) return null;

  return showSearch && visible ?  (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full'>
        <input
          type="text"
          placeholder='Search...'
          className='flex-1 outline-none bg-inherit text-sm'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className='w-4' src={assets.search_icon} alt="Search icon" />
      </div>

      {/* Close (cross) button */}
      <img
        className='inline w-3 cursor-pointer'
        src={assets.cross_icon}
        alt="Close"
        onClick={() => setshowSearch(false)} 
      />
    </div>
  ):null;
};

export default Searchbar;
