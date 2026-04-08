import React from "react";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ThemeButton from "../src/utils/ThemeButton";

const setTheme = vi.fn();
let themeValue = "light";
let container: HTMLDivElement;
let root: Root;

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: themeValue,
    setTheme,
  }),
}));

describe("ThemeButton", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    setTheme.mockClear();
    themeValue = "light";
    root.unmount();
    container.remove();
  });

  it("toggles from light to dark", async () => {
    await act(async () => {
      root.render(React.createElement(ThemeButton));
    });

    const button = container.querySelector("button");
    expect(button).not.toBeNull();

    button?.click();

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles from dark to light", async () => {
    themeValue = "dark";

    await act(async () => {
      root.render(React.createElement(ThemeButton));
    });

    const button = container.querySelector("button");
    expect(button).not.toBeNull();

    button?.click();

    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
