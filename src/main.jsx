import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Home from './Component/Home/Home';
import Register from './Page/Register/Register';
import AuthProvider from './Auth/AuthProvider';
import Details from './Page/Details/Details';
import RightSide from './Page/RightSIde/RightSide';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        loader: () => fetch('/estate.json'),
        path: "/catagory/:id",
        element: <RightSide></RightSide>
      },
      { path: "/details", element: <Details></Details> }
    ]
  },
  {
    path: '/register', element: <Register></Register>
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </AuthProvider>
)
