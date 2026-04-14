"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientInstance } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const supabase = createClientInstance();

    async function checkSession() {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        router.replace("/dashboard");
        return;
      }

      setCheckingSession(false);
    }

    checkSession();
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const supabase = createClientInstance();

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not connect to Supabase");
    } finally {
      setLoading(false);
    }
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClientInstance();

      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setMessage("Account created. Check your email if confirmation is enabled.");
      setConfirmPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not connect to Supabase");
    } finally {
      setLoading(false);
    }
  }

  function toggleMode() {
    setIsSignUp((prev) => !prev);
    setError("");
    setMessage("");
    setPassword("");
    setConfirmPassword("");
  }

  if (checkingSession) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f6f1eb] px-4">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <p className="text-lg text-black">Checking session...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f6f1eb] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-black">
          {isSignUp ? "Create your Snorii account" : "Login to Snorii"}
        </h1>

        <p className="mb-6 text-sm text-gray-600">
          {isSignUp
            ? "Set up your account to start saving and managing stories"
            : "Welcome back — sign in to continue"}
        </p>

        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg border border-gray-300 p-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}
          {message && <p className="text-sm text-green-600">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black p-3 text-white disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : isSignUp
              ? "Create account"
              : "Login"}
          </button>
        </form>

        <button
          type="button"
          onClick={toggleMode}
          className="mt-4 w-full text-sm text-gray-600 underline underline-offset-4"
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Need an account? Create one"}
        </button>
      </div>
    </main>
  );
}