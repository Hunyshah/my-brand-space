"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({ id: "guest", name: "Guest" });
  }, []);

  return { user };
}
