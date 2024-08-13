import { useContext } from 'react';
import { CartContext } from '../context/ContextProvider';
import CartProducts from './CartProducts';
import { totalItems, totalPrice } from '../context/CartReducer';

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center my-16">Items in Cart</h2>

      <div className="grid grid-cols-4 gap-4 mx-16">
        {cart.map((p) => (
          <CartProducts className="text-center" key={p.id} product={p} />
        ))}
      </div>

      <div className="text-3xl text-center font-bold my-6">
        <p className="my-4 text-green-500">Total Items:{totalItems(cart)}</p>
        <p className="my-4 text-purple-600">Total Price:${totalPrice(cart)}</p>
      </div>
    </div>
  );
};
export default Cart;
