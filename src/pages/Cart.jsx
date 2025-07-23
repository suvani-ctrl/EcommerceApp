import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null; // safeguard

          const itemPrice = productData.price;
          const totalPrice = itemPrice * item.quantity;

          return (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 grid grid-cols-4 items-center'
            >
              <div className='flex items-start gap-6'>
                <img
                  className='w-16 sm:w-20'
                  src={productData.image[0]}
                  alt={productData.name}
                />
              </div>
              <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
              <p className='text-xs sm:text-base'>Size: {item.size}</p>
              <p className='text-xs sm:text-base'>Qty: {item.quantity}</p>
              <p className='text-xs sm:text-base'>
                Price: {currency} {itemPrice.toFixed(2)}
              </p>
              <p className='text-xs sm:text-base font-semibold'>
                Total: {currency} {totalPrice.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
