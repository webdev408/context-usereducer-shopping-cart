/* eslint-disable react-refresh/only-export-components */
export const totalItems = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];

    case 'REMOVE_FROM_CART':
      return state.filter((product) => product.id !== action.id);

    case 'INCREASE': {
      const indexI = state.findIndex((p) => p.id === action.id);
      if (state[indexI].quantity < 10) {
        const updatedProduct = { ...state[indexI], quantity: state[indexI].quantity + 1 };
        return [...state.slice(0, indexI), updatedProduct, ...state.slice(indexI + 1)];
      }
      return state;
    }

    case 'DECREASE': {
      const indexD = state.findIndex((product) => product.id === action.id);
      if (state[indexD].quantity > 1) {
        const updatedProduct = { ...state[indexD], quantity: state[indexD].quantity - 1 };
        return [...state.slice(0, indexD), updatedProduct, ...state.slice(indexD + 1)];
      }
      return state;
    }

    default:
      return state;
  }
};
export default CartReducer;
