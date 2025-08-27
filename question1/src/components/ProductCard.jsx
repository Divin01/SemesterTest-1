import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div style={{ border: '1px solid grey', padding: '10px', borderRadius: '8px' }}>
        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
