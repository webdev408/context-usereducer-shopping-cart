import { useContext } from 'react';
import { CartContext } from '../context/ContextProvider';

/* eslint-disable react/prop-types */
const CartProducts = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE', id: id });
  };

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE', id: id });
  };

  return (
    <div className="container mx-auto">
      <li className="list-none my-10 bg-slate-200 px-16 py-6">
        <h4>{product.name}</h4>
        <h5>${product.price}</h5>
        <img className="w-20 hover:scale-125 mt-3" src={product.image} alt={product.name} />
        <div className="buttons">
          <button className="bg-orange-400 me-3 p-2 my-4" onClick={() => handleIncrease(product.id)}>
            ➕
          </button>
          <button className="bg-yellow-400 p-2">{product.quantity}</button>
          <button className="bg-red-400 p-2 ms-3 mt-4" onClick={() => handleDecrease(product.id)}>
            ➖
          </button>
        </div>
      </li>
      <button className="bg-red-400 p-2 ms-3 mt-4" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: product.id })}>
        Remove
      </button>
    </div>
  );
};
export default CartProducts;
