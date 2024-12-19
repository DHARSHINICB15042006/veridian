import React from 'react';
import Home from '../screens/home'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
 
]);

function RouterApp() {
  return (
    <>
   
      <RouterProvider router={router} />
    </>
  );
}

export default RouterApp;
