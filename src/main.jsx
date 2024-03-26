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
      },
      {
        path: '/pages',
        element: <Pages></Pages>,
      },
      {
        path: '/Book/:id',
        element: <BookDetails></BookDetails>,
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
