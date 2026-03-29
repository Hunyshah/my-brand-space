"use client";

import { useState } from "react";

export function ModeToggle() {
  const [mode, setMode] = useState("light");

  return (
    <button
      className="rounded-full border px-4 py-2 text-sm"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      {mode === "light" ? "Switch to dark" : "Switch to light"}
    </button>
  );
}
