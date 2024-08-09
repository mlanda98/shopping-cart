import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import { describe, test, expect, beforeEach, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../src/components/Checkout";
import "@testing-library/jest-dom"

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
})