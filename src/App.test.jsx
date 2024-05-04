import { describe, it, expect, test } from 'vitest';


import HomePage from "./routes/homePage";
import ErrorPage from "./error-page";
import ShopPage from "./routes/shopPage-1";


import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import * as React from "react";
import {
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";

test("event route", async () => {
 
  const routes = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/shop-page-1",
       element: <ShopPage/>, 
        },
      
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop-page-1"],
    initialIndex: 1,
  });

  render(<RouterProvider router={router} />);

  describe("App component", () => {
    it("renders correct heading", () => {
      render(<ShopPage/>);
      expect(screen.getByRole("heading").textContent).toMatch(/Shopping Cart Project/i);
    });
  });
});