import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]); // ✅ Fixed here

  useEffect(() => {
    if (products.length > 0) {
      // Filter based on category and subCategory
      let productsCopy = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      setRelated(productsCopy.slice(0, 5)); // ✅ Fixed typo: slie → slice
    }
  }, [products, category, subCategory]); // ✅ Added these as dependencies

  return (
    <div className="mt-10">
      <h2 className="text-lg font-medium mb-4">Related Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {related.length === 0 && (
          <p className="text-gray-400 col-span-full">No related products found.</p>
        )}

        {related.map((item) => (
          <div key={item._id || item.id} className="border p-2 rounded">
            <img
              src={Array.isArray(item.image) ? item.image[0] : item.image}
              alt={item.name}
              className="w-full h-24 object-cover rounded"
            />
            <p className="text-sm mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
