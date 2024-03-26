import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import Pages from './Components/Pages/Pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/books',
    element: <ListedBooks></ListedBooks>,
  },
  {
    path: '/pages',
    element: <Pages></Pages>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
