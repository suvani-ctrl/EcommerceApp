import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };
   
  const applyFilter = () =>{
    let productsCopy = products.slice();
  }
  

  useEffect(() => {
  let filtered = [...products];

  // Search filter (only if showSearch is true and search is not empty)
  if (showSearch && search.trim() !== '') {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category filter
  if (category.length > 0) {
    filtered = filtered.filter(product => category.includes(product.category));
  }

  // SubCategory filter
  if (subCategory.length > 0) {
    filtered = filtered.filter(product => subCategory.includes(product.subCategory));
  }

  // Sorting
  if (sortType === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortType === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  setFilterProducts(filtered);
}, [products, category, subCategory, sortType, search, showSearch]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Left Filter Panel */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="Toggle" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>GENDER</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label className='flex gap-2 items-center' key={cat}>
                <input className='w-3 h-3' type='checkbox' value={cat} onChange={toggleCategory} checked={category.includes(cat)} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Topwear', 'Bottomwear', 'Innerwear'].map((sub) => (
              <label className='flex gap-2 items-center' key={sub}>
                <input className='w-3 h-3' type='checkbox' value={sub} onChange={toggleSubCategory} checked={subCategory.includes(sub)} />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Product Grid Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item) => (
            <ProductItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
