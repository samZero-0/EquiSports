import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddEquipment from "../pages/AddEquipment";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[

        {
          path:'',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'addEquipment',
          element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
        },
      ]
    },
    {
        path: "*",
        element: <div>404 Page Not Found</div>,
      },
  ]);