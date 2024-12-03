import {
    createBrowserRouter,
   
  } from "react-router-dom";
import NavBar from "../components/NavBar";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar></NavBar>
    },
    {
        path: "/about",
        element: <div>About</div>,
      },
  ]);