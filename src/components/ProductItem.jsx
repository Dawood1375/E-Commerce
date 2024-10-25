import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => { // Correctly destructure props
  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}> {/* Fix the Link URL */}
      <div className='overflow-hidden'>
        {/* Safely access image[0] */}
        <img 
          className='hover:scale-110 transition ease-in-out' 
          src={image && image[0] ? image[0] : '/path-to-placeholder-image.jpg'}  // Use a fallback image if image[0] is undefined
          alt={name || 'Product image'}  // Provide meaningful alt text
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;



