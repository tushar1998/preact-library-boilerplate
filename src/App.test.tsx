import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

describe("App Tests", () => {
  it("render App", () => {
    render(<App />);
    expect(screen.getByText("Current value: 0")).toBeInTheDocument();
  });

  it("should increment counter if clicked on increment button", () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("increment"));
    expect(screen.getByText("Current value: 1")).toBeInTheDocument();
  });
});
