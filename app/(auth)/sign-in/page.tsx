"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authClient.signIn.email({
      email,
      password,
    });

    alert("Logged in ✅");
  };

  const handleSignup = async () => {
    await authClient.signUp.email({
      email,
      password,
      name: "Bilal",
    });

    alert("User created ✅");
  };

  return (
    <div className="p-6 space-y-4">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />

      <button onClick={handleLogin} className="bg-black text-white px-4 py-2">
        Login
      </button>

      <button
        onClick={handleSignup}
        className="bg-gray-500 text-white px-4 py-2"
      >
        Signup
      </button>
    </div>
  );
}
