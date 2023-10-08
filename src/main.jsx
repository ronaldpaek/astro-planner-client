import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';
import Login from './components/Login';
import Register from './components/Register';
import CreateTrip from './components/CreateTrip';

// Create a router configuration
const router = createBrowserRouter([
  {
    path: '/',
    // loader: () => fetchPaintings(),
    element: (
      <>
        <App />
      </>
    ),
    id: 'App',
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/create-trip', element: <CreateTrip /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
