import { useState } from 'react';
import goods from '../data';
import ProductDetails from './ProductDetails';

const Products = () => {
  const [products] = useState(goods);
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold my-8">Our Products</h2>
      <div className="grid grid-cols-4 gap-4 bg-gray-300">
        {products.map((p) => (
          <ProductDetails key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
export default Products;
