import { describe, it, expect } from 'vitest';



import ShopPage from "./routes/shopPage-1";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("ShopPage component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<ShopPage />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<ShopPage />);
    const button = screen.getByRole("button", { name: "Add" });

    await user.click(button);

    expect(screen.getByRole("paragraph").textContent).toMatch(/1/i);
  });
});