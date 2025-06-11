// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { describe, expect, vi, it } from "vitest";
import ShoppingItems from "../src/components/ShoppingItems.jsx";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

vi.mock("../src/components/StoreApi.jsx", () => ({
  fetchStoreItems: () =>
    Promise.resolve([
      { id: 1, title: "Item 1", price: 10, image: "image1.jpg" },
      { id: 2, title: "Item 2", price: 20, image: "image2.jpg" },
    ]),
}));

describe("ShoppingItems Component", () => {
  it("renders shopping items and cart component", async () => {
    render(
      <MemoryRouter>
        <ShoppingItems addToCart={() => {}} cartItems={[]} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });
  });

  it("calls addToCart when Add To Cart button is clicked", async () => {
    const addToCartMock = vi.fn();
    render(
    <MemoryRouter
    ><ShoppingItems addToCart={addToCartMock} cartItems={[]} />;
    </MemoryRouter>
    )
    await waitFor(() => screen.getByText("Item 1"));

    const addButton = screen.getAllByText(/Add To Cart/i)[0];
    await userEvent.click(addButton);

    expect(addToCartMock).toHaveBeenCalled();
  });
  
});
