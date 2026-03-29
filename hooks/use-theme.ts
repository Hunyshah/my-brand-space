"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { theme, setTheme };
}
