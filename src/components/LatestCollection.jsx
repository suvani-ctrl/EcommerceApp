import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../context/ShopContext";
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Get first 10 products
  }, [products]);

  return (
    <div className='my-10'>
      {/* Title Section */}
      <div className='text-center py-8 text-3xl'>
        <Title text1='LATEST' text2='COLLECTIONS' />
        <p className='text-sm text-gray-500 max-w-xl mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan.
        </p>
      </div>

      {/* Product Grid */}
      <div className='px-4 sm:px-6 md:px-10'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6'>
          {latestProducts.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
