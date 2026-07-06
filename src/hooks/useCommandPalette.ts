"use client";
import { createContext, useContext } from "react";

type CommandPaletteCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const CommandPaletteContext = createContext<CommandPaletteCtx>({
  open: false,
  setOpen: () => {},
});

export function useCommandPalette() {
  return useContext(CommandPaletteContext);
}
