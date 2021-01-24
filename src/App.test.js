import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("basic app routing", () => {
  test("should always route to login if no login token is present", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App isTokenValid={() => false} />
      </Router>
    );

    expect(screen.getByText("gimme password:")).toBeInTheDocument();
  });

  describe("when logged in", () => {
    test("renders lander on home url", () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App isTokenValid={() => true}/>
        </Router>
      );

      expect(screen.getByText("Welcome to the Campaign (setup)!")).toBeInTheDocument();
    });

    test("renders chargen page on chargen url", () => {
      const history = createMemoryHistory();
      history.push("/chargen");
      render(
        <Router history={history}>
          <App isTokenValid={() => true}/>
        </Router>
      );

      expect(screen.getByText("Silver Marches PC Generator")).toBeInTheDocument();
    });

    test("renders mapquiz page on mapquiz url", () => {
      const history = createMemoryHistory();
      history.push("/mapquiz");
      render(
        <Router history={history}>
          <App isTokenValid={() => true}/>
        </Router>
      );

      expect(screen.getByText("The town of Auvendell")).toBeInTheDocument();
    });
    
  });
});
