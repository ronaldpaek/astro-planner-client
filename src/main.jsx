import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';
import Login from './components/Login';

// Create a router configuration
const router = createBrowserRouter([
  {
    path: '/',
    // loader: () => fetchPaintings(),
    element: (
      <>
        {/* Conditionally render the navigation component based on screen size */}

        <App />
      </>
    ),
    id: 'App',
    children: [{ path: '/login', element: <Login /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
