
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllData } from './Data/AllData';
import AllCart from './Cart/AllCart';
import ScrollToTop from 'react-scroll-to-top';
import AllProp from './Properties/Allprop';
import AllDetails from './Details/AllDetails';
import AllContact from './Contact/AllContact';
import AllProducts from './Products/AllProducts';
import AllSingleProduct from './SingleProduct/AllSingleProduct';
var ahmed = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Properties",
    element: <AllProp/>,
  },
  {
    path: "details",
    element: <AllDetails/>,
  },
  {
    path: "contact",
    element: <AllContact/>,
  },
  {
    path: "products",
    element: <AllProducts/>,
  },
   {
    path: "singleproduct/:id",
    element: <AllSingleProduct/>,
  },
  {
    path: "cart",
    element: <AllCart/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllData>
    <ScrollToTop />
    <RouterProvider router={ahmed} />
  </AllData>
);