import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './components/Router';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
