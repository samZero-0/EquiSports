import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddEquipment from "../pages/AddEquipment";
import PrivateRoute from "./PrivateRoute";
import AllEquipments from "../pages/AllEquipments";
import Details from "../pages/Details";
import NotFound from "../pages/404Page";
import MyEquipmentList from "../pages/MyEquipmentList";
import Update from "../pages/Update";

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
        {
          path: 'allEquipments',
          loader: ()=>fetch('https://assignment10backend.vercel.app/equipments'),
          element:<AllEquipments></AllEquipments>
        },
        {
          path: 'allEquipments/:id',
          loader: ({params})=>fetch(`https://assignment10backend.vercel.app/equipments/${params.id}`),
          element:<PrivateRoute><Details></Details></PrivateRoute>
        },
        {
          path: 'myEquipments/byEmail/:email',
          loader: ({params})=>fetch(`https://assignment10backend.vercel.app/equipments/byEmail/${params.email}`),
          element:<PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>
        },
        {
          path: 'myEquipments/byEmail/:email/update/:id',
          loader: ({params})=>fetch(`https://assignment10backend.vercel.app/equipments/${params.id}`),
          element:<PrivateRoute><Update></Update></PrivateRoute>
        },

      ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
      },
  ]);