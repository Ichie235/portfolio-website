"use client";

import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { CommandPaletteContext } from "@/hooks/useCommandPalette";
import CommandPalette from "@/components/ui/CommandPalette";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CommandPaletteContext.Provider value={{ open, setOpen }}>
        {children}
        <CommandPalette />
      </CommandPaletteContext.Provider>
    </ThemeProvider>
  );
};

export default Provider;
