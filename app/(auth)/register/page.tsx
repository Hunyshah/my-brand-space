"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: "/admin", // Signup ke baad seedha admin dashboard
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Admin created! Check your Neon DB users table.");
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold">Create Admin Account</h1>
      <input
        type="text"
        placeholder="Name"
        className="p-2 border"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 border"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignUp}
        className="bg-black text-white p-2 rounded"
      >
        Create Admin
      </button>
    </div>
  );
}
