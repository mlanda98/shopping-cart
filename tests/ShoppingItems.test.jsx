import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ShoppingItems from "../src/components/ShoppingItems";
import { fetchStoreItems } from "../src/components/api";
import "@testing-library/jest-dom"


vi.mock("../src/components/api", () => ({
  fetchStoreItems: vi.fn(),
}));

describe("ShoppingItems Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders shopping items and cart component", async () => {
    fetchStoreItems.mockResolvedValue([
      {
        id: 1,
        name: "Item 1",
        description: "Description 1",
        price: "$10.00",
        image: "image1.jpg",
      },
      {
        id: 2,
        name: "Item 2",
        description: "Description 2",
        price: "$20.00",
        image: "image2.jpg",
      },
    ]);

    render(
      <MemoryRouter>
        <ShoppingItems />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });
  });

  test("navigates to checkout page on click", () => {
    render(
      <MemoryRouter>
        <ShoppingItems />
      </MemoryRouter>
    );

    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });
});
