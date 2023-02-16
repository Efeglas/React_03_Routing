import { createBrowserRouter, RouterProvider} from 'react-router-dom'; //? createRoutesFromElements, Route
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Root from './pages/Root';
import Error from './pages/Error';

/* const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home />}/>
    <Route path='/products' element={<Products />}/>
  </Route>
);

const router = createBrowserRouter(routeDefinition); */

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root/>, 
    errorElement: <Error />,
    children: [
    { index: true, element: <Home /> },
    { path: '/products', element: <Products />},
    { path: '/products/:prodId', element: <ProductPage />},
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;