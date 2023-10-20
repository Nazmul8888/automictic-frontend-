import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import Login from './components/NavBar/Login/Login';
import Register from './components/NavBar/Register/Register';
import AuthProvider from './Router/AuthProvider';
import Cart from './components/NavBar/Cart/Cart';
import DetailsCart from './components/DetailsCart/DetailsCart';
import PrivateRoute from './Router/PrivateRoute';
import AddProduct from './components/AddProduct/AddProduct';
import Product from './components/Product/Product';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/product/:details',
        element: <DetailsCart></DetailsCart>,
        loader: () => fetch('data.json')

      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/product',
        element: <Product></Product>,
        loader: ()=> fetch('http://localhost:5000/product')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
