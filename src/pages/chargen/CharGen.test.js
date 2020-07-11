import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import CharGen from "./CharGen";

describe("chargen page", () => {
  const attrMatchers = [
    /^Race:/,
    /^Class:/,
    /^Archetype:/,
    /^Campaign Hook:/,
    /^Background:/,
    /^NPC Connection:/,
  ];

  beforeEach(() => {
    render(<CharGen />);
  });

  afterEach(() => {
    cleanup();
  });
  
  test("renders new-random-pc button", () => {
    const randomizer = screen.getByText("Randomize PC!");
    expect(randomizer).toBeInTheDocument();
  });

  describe("on first clicking new-random-pc button", () => {
    test("generates six new AttrCards ", () => {
      expect(screen.getAllByRole("button").length).toBe(1);
      fireEvent.click(screen.getByText("Randomize PC!"));
      expect(screen.getAllByRole("button").length).toBe(7);
    });

    test("generates one AttrCard per PC attribute", () => {
      attrMatchers.forEach((regex) => {
        expect(screen.queryByText(regex)).toBeNull();
      });
      fireEvent.click(screen.getByText("Randomize PC!"));
      attrMatchers.forEach((regex) => {
        expect(screen.getByText(regex)).toBeInTheDocument();
      });
    });
  });

  describe("on a second+ click of new-random-pc button", () => {
    test("alters at least one PC-attribute value", () => {
      fireEvent.click(screen.getByText("Randomize PC!"));

      const firstPcAttrs = attrMatchers.map((regex) => {
        return screen.getByText(regex).textContent;
      });

      fireEvent.click(screen.getByText("Randomize PC!"));

      const secondPcAttrs = attrMatchers.map((regex) => {
        return screen.getByText(regex).textContent;
      });

      // Yes, it _could,_ currently, return the identical list:
      // but it's rare enough to disregard for an MVP
      expect(firstPcAttrs).not.toEqual(secondPcAttrs);
    });
  });

  // test('pinning works', () => {})

  // test('pinning a descendent attr works', () => {})

  // test('unpinning works', () => {}) 

  // test('unpinning a descendent attr works', () => {}) 
});
