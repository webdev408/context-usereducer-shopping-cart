import { useContext } from 'react';
import { CartContext } from '../context/ContextProvider';

/* eslint-disable react/prop-types */
const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="container mx-auto">
      <li className="list-none my-10 mx-16">
        <h4>{product.name}</h4>
        <h5>${product.price}</h5>
        <img className="w-20 hover:scale-125 mt-3" src={product.image} alt={product.name} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded" onClick={() => dispatch({ type: 'ADD_TO_CART', product })}>
          Add to cart
        </button>
      </li>
    </div>
  );
};
export default ProductDetails;
