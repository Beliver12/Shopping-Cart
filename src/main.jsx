import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/homePage";
import ErrorPage from "./error-page";
import ShopPage from "./routes/shopPage-1";
import ShopPage2 from "./routes/shopPage-2";
import ShopPage3 from "./routes/shopPage-3";
import ShopPage4 from "./routes/shopPage-4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>
  },
  {
     path: "/shop-page-1",
     element: <ShopPage/>, 
  },
  {
    path: "/shop-page-2",
    element: <ShopPage2/>
  },
  {
    path: "/shop-page-3",
    element: <ShopPage3/>
  },
  {
    path: "/shop-page-4",
    element: <ShopPage4/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
