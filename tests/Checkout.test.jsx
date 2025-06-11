// eslint-disable-next-line no-unused-vars
import React from "react";
import {render, screen} from "@testing-library/react"
import { describe, test, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../src/components/Checkout.jsx";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
describe("Checkout Component", () => {
  const removeFromCart = vi.fn();

  test("renders checkout page with items", () => {
    const cartItems = [
      {
        id: 1,
        name: "Item 1",
        description: "Description 1",
        price: "$10.00",
        image: "image1.jpg",
        quantity: 2,
      },
      {
        id: 2,
        name: "Item 2",
        description: "Description 2",
        price: "$20.00",
        image: "image2.jpg",
        quantity: 1,
      },
    ];
  
    render(
      <MemoryRouter>
        <Checkout cartItems={cartItems} removeFromCart={removeFromCart}/>
      </MemoryRouter>
    );
    });

    test("calls removeFromCart when remove button is clicked", async () => {
      const cartItems = [
        {
          id: 1,
          name: "Item 1",
          description: "Description 1",
          price: "$10.00",
          image: "image1.jpg",
          quantity: 2,
        },
      ];

      render(
        <MemoryRouter>
          <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
        </MemoryRouter>
      );

      const removeButton = screen.getByRole("button", { name: /remove/i });
      await userEvent.click(removeButton);

      expect(removeFromCart).toHaveBeenCalledWith(cartItems[0].id);
    });
})