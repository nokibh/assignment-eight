import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home/Home';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ListedBooks from './Components/ListedBooks/ListedBooks';
import Pages from './Components/Pages/Pages';
import MainLayout from './MainLayout/MainLayout';

import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails';
import Read from './Components/Read/Read';
import WishList from './Components/WishList/WishList';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
        children: [
          {
            path: '/books/read',
            element: <Read></Read>,
          },
          {
            path: '/books/wishlist',
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: '/pages',
        element: <Pages></Pages>,
      },
      {
        path: '/Book/:id',
        element: <BookDetails> </BookDetails>,
        loader: () => fetch('../books.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
