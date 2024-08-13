import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from '../context/ContextProvider';

const Root = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4 bg-green-400 text-white shadow-lg px-12">
        <h1 className="text-3xl font-bold">TekSkill</h1>
        <nav>
          <ul className="flex space-x-4">
            <Link to="/">Products</Link>
            <Link to="/cart">Cart({cart.length})</Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
export default Root;
