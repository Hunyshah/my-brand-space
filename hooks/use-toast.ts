"use client";

import { useState } from "react";

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  return {
    message,
    showToast: (text: string) => setMessage(text),
    clearToast: () => setMessage(null),
  };
}
