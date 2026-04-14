"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/library");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#f3f0f8] px-6 py-16 text-[#1f1b35]">
      <div className="mx-auto max-w-md rounded-[32px] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Create account</h1>
        <p className="mt-3 text-[#6b6780]">Save stories and build your library.</p>

        <input
          className="mt-6 w-full rounded-2xl border border-[#ddd6ea] px-4 py-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mt-4 w-full rounded-2xl border border-[#ddd6ea] px-4 py-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-[#8b7cf6] px-6 py-3 font-semibold text-white"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        {error ? (
          <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <p className="mt-6 text-sm text-[#6b6780]">
          Already have an account? <Link className="underline" href="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
}