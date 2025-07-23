import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';


const Product = () => {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);  // <-- Added selected size state

  useEffect(() => {
    const foundProduct = products.find(item => item._id === id || item.id === id);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(Array.isArray(foundProduct.image) ? foundProduct.image[0] : "");
      setSelectedSize(null); // reset size when product changes
    } else {
      console.warn("No product found for id:", id);
    }
  }, [id, products]);

  if (!productData) {
    return <div className="text-center text-gray-400">Loading product...</div>;
  }

  // Optional: disable add to cart if size required but not selected
const canAddToCart = productData.sizes?.length > 0 ? selectedSize !== null : true;

  return (
    <>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />

      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* Image & Thumbnails */}
        <div className='flex gap-6 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex sm:flex-col gap-2 sm:max-h-[300px] sm:overflow-y-auto overflow-x-auto'>
            {productData.image?.map((item, index) => (
  <img
    key={index}
    onClick={() => setImage(item)}
    src={item}
    alt=""
    className={`w-[80px] h-[80px] object-cover rounded-md cursor-pointer border ${
      image === item ? 'border-black' : 'border-gray-300'
    }`}
  />
))}

          </div>
          <div className='flex justify-center items-center w-full sm:w-2/3'>
            <img
              src={image}
              alt="Selected product"
              className='w-[250px] sm:w-[300px] h-auto rounded-lg shadow-md'
            />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1 mt-10'>
          <h1 className='font-medium text-2xl'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" />
            ))}
            <img src={assets.star_dull_icon} alt="star" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency} {productData.price}
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Sizes */}
          {productData.sizes?.length > 0 && (
            <div className='flex flex-col gap-4 mt-8'>
              <p className='text-sm font-medium'>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`border px-4 py-1 rounded transition ${
                      selectedSize === size ? 'border-black font-semibold' : 'border-gray-300'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

        <button
  onClick={() => {
addToCart(productData._id || productData.id, selectedSize);
    // toast.success("Added to cart!");
  }}
  className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
>
  Add to Cart
</button>

        </div>

        {/* Description & Reviews */}
        <div className='mt-20'>
          <div className='flex border-b'>
            <b className='border px-5 py-3 text-sm cursor-pointer'>Description</b>
            <p className='border px-5 py-3 text-sm cursor-pointer'>Review (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-gray-500">
            <p>{productData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
