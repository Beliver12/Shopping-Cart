import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/homePage";
import ErrorPage from "./error-page";
import ShopPage from "./routes/shopPage-1";
import CartContext from "./routes/cart";
import About from "./routes/about";
import Description from "./routes/description";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/shop-page-1",
     element: <ShopPage/>, 
      },
      {
        path: "/cart",
     element: <CartContext/>, 
     
      },
      {
        path: "/about",
     element: <About/>, 
     
      },
      {
        path: "/description",
     element: <Description/>, 
     
      },
    
    ],
  },
 
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
