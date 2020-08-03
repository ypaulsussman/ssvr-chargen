import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Login, { validate } from "./Login";
import { LOGIN_TOKEN } from "../../constants";

// @TODO: either [1] rewrite `render` into a fully-controlled, non-HTML-form-using component
// in order to replace the `e.target[0]["value"]` jankiness, and/or [2] rewrite `validate`
// not to use any `window` methods...?

describe("the login page", () => {
  test.skip("should reject inaccurate logins", () => {
    const windowSpy = jest.spyOn(global, 'window', 'alert');
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/Login Token/), {
      target: { value: "lol wrong token" },
    });
    fireEvent.submit(screen.getByLabelText(/Login Form/));
    expect(windowSpy).toHaveBeenCalled();
  });
});
