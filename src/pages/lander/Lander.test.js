import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Lander from "./Lander";

describe("lander page", () => {
  test("should include links to the mapquiz and pc generator", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Lander />
      </Router>
    );
    expect(screen.getByText(/Backgrounder Map and Quiz/)).toBeInTheDocument;
    expect(screen.getByText(/Random-PC Generator/)).toBeInTheDocument;
  });
});
