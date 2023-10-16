import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import CreateTrip from '@/pages/CreateTrip';
import Hotel from '@/pages/Hotel';
import Flight from '@/pages/Flight';
import Car from '@/pages/Car';
import Confirmation from '@/pages/Confirmation';
import NotFound from '@/pages/NotFound';

function App() {
  // Create a router configuration
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'create-trip', element: <CreateTrip /> },
        { path: 'flight/:tripId', element: <Flight /> },
        { path: 'hotel/:tripId', element: <Hotel /> },
        { path: 'car/:tripId', element: <Car /> },
        { path: 'confirmation/:tripId', element: <Confirmation /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
