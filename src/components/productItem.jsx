// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductItem;
