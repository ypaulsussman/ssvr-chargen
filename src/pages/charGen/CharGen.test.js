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
    /^\(Optional\) NPC Contact:/,
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

  describe("a first clicking new-random-pc button", () => {
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

  describe("a second+ click of new-random-pc button", () => {
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

  describe("independent attrs", () => {
    test("can be pinned and unpinned", () => {
      fireEvent.click(screen.getByText("Randomize PC!"));
      const charClassButton = screen.getByText(/^Class:/);
      const firstCharClassText = charClassButton.textContent;

      // pin it
      fireEvent.click(charClassButton);
      let unchanged = true;

      // simulate clicking button 5 times
      for (let i = 0; i < 5; i++) {
        fireEvent.click(screen.getByText("Randomize PC!"));
        const newCharClassText = screen.getByText(/^Class:/).textContent;
        if (firstCharClassText !== newCharClassText) {
          unchanged = false;
        }
      }
      expect(unchanged).toBe(true);

      // unpin it
      fireEvent.click(charClassButton);

      // simulate clicking button 5 times
      for (let i = 0; i < 5; i++) {
        fireEvent.click(screen.getByText("Randomize PC!"));
        const newCharClassText = screen.getByText(/^Class:/).textContent;
        if (firstCharClassText !== newCharClassText) {
          unchanged = false;
        }
      }
      expect(unchanged).toBe(false);
    });
  });

  describe("descendent attrs", () => {
    test("can be pinned and unpinned", () => {
      fireEvent.click(screen.getByText("Randomize PC!"));
      const archetypeButton = screen.getByText(/^Archetype:/);
      const firstArchetypeText = archetypeButton.textContent;

      // pin it
      fireEvent.click(archetypeButton);
      let unchanged = true;

      // simulate clicking button 5 times
      for (let i = 0; i < 5; i++) {
        fireEvent.click(screen.getByText("Randomize PC!"));
        const newArchetypeText = screen.getByText(/^Archetype:/).textContent;
        if (firstArchetypeText !== newArchetypeText) {
          unchanged = false;
        }
      }
      expect(unchanged).toBe(true);

      // unpin it
      fireEvent.click(archetypeButton);

      // simulate clicking button 5 times
      for (let i = 0; i < 5; i++) {
        fireEvent.click(screen.getByText("Randomize PC!"));
        const newArchetypeText = screen.getByText(/^Archetype:/).textContent;
        if (firstArchetypeText !== newArchetypeText) {
          unchanged = false;
        }
      }
      expect(unchanged).toBe(false);
    });

    test("also pin and unpin their parent attr", () => {
      fireEvent.click(screen.getByText("Randomize PC!"));
      const archetypeButton = screen.getByText(/^Archetype:/);
      const firstCharClassText = screen.getByText(/^Class:/).textContent;

      // pin it
      fireEvent.click(archetypeButton);
      let unchanged = true;

      // simulate clicking button 5 times
      for (let i = 0; i < 5; i++) {
        fireEvent.click(screen.getByText("Randomize PC!"));
        const newCharClassText = screen.getByText(/^Class:/).textContent;
        if (firstCharClassText !== newCharClassText) {
          unchanged = false;
        }
      }
      expect(unchanged).toBe(true);

      // unpin it
      fireEvent.click(archetypeButton);

      // simulate clicking button 5 times
      for (let i = 0; i < 5; i++) {
        fireEvent.click(screen.getByText("Randomize PC!"));
        const newCharClassText = screen.getByText(/^Class:/).textContent;
        if (firstCharClassText !== newCharClassText) {
          unchanged = false;
        }
      }
      expect(unchanged).toBe(false);
    });
  });
});
