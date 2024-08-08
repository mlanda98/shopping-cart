import { describe,  test, expect } from "vitest";
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "../src/App";


describe("App Component", () => {
  test("renders store logo, intro text, and start shopping link", () => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )

    expect(screen.getByAltText("Store Logo")).toBeInTheDocument();
    expect(screen.getByText("Welcome to Our Store!")).toBeInTheDocument();
    expect(screen.getByText("Start Shopping")).toBeInTheDocument();
  })
})