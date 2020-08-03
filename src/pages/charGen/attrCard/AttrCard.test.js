import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import AttrCard from "./AttrCard";

describe("PC-Attribute Cards", () => {
  let attr, headTitle, togglePin, pinKeys, unPinKeys;

  beforeEach(() => {
    attr = {
      name: "foo",
      description: "bar baz",
      pinned: true,
    };
    headTitle = "meep morp";
    togglePin = jest.fn();
    pinKeys = ["quuz"];
    unPinKeys = ["quuz"];
  });

  afterEach(() => {
    cleanup;
  });

  test("should render", () => {
    render(
      <AttrCard
        attr={attr}
        headTitle={headTitle}
        togglePin={togglePin}
        pinKeys={pinKeys}
        unPinKeys={unPinKeys}
      />
    );
    expect(document.body).toMatchSnapshot();
  });

  test("should call the toggle-fn when clicked", () => {
    render(
      <AttrCard
        attr={attr}
        headTitle={headTitle}
        togglePin={togglePin}
        pinKeys={pinKeys}
        unPinKeys={unPinKeys}
      />
    );
    fireEvent.click(screen.getByTitle(/Click to pin this attribute/))
    expect(togglePin).toHaveBeenCalledWith(pinKeys, false)
  });
});
