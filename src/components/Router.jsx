import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import NotFound from './NotFound';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Footer from './Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Products />,
        index: true,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/footer',
        element: <Footer />,
      },
    ],
  },
]);
export default router;
