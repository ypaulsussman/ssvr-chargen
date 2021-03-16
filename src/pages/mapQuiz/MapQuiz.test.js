import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MapQuiz from "./MapQuiz";

describe.skip("MapQuiz", () => {
  test("should display a landmark when the relevant map-section is clicked", () => {
    render(<MapQuiz />);
    fireEvent.click(document.body.querySelector('area[alt="Mimph"]'));
    expect(screen.getByText("Mimph")).toBeInTheDocument;
    expect(screen.getByText(/Mimph is only miles by sea from/))
      .toBeInTheDocument;
  });
});
