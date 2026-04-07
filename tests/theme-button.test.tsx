import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ThemeButton from "../src/utils/ThemeButton";

const setTheme = vi.fn();
let themeValue = "light";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: themeValue,
    setTheme,
  }),
}));

describe("ThemeButton", () => {
  afterEach(() => {
    setTheme.mockClear();
    themeValue = "light";
  });

  it("toggles from light to dark", async () => {
    render(<ThemeButton />);

    const button = await screen.findByRole("button", {
      name: /theme change button/i,
    });

    fireEvent.click(button);

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles from dark to light", async () => {
    themeValue = "dark";

    render(<ThemeButton />);

    const button = await screen.findByRole("button", {
      name: /theme change button/i,
    });

    fireEvent.click(button);

    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
