"use client"
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react"
import ToggleButton from "./ToggleButton";

type Props = {
    className?: string
}

export default function ThemeButton({className}: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return(
    <ToggleButton
      type='button'
      ariaLabel='theme change button'
      className={`relative ${className} `}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Icon icon="mingcute:sun-fill" className="text-2xl" /> : <Icon icon="line-md:moon-loop" className="text-2xl" />}
    </ToggleButton>
  )
}
