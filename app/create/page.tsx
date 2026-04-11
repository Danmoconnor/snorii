"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [ageRange, setAgeRange] = useState("2-4");
  const [story, setStory] = useState("");

  const handleGenerate = () => {
    if (!prompt.trim()) {
      setStory("Please enter a story idea first.");
      return;
    }

    setStory(
      `Once upon a time, ${prompt}... (your magical story will appear here soon ✨)`
    );
  };

  return (
    <main className="min-h-screen bg-[#f3f0f8] text-[#1f1b35]">
      <div className="mx-auto max-w-3xl px-6 py-16">

        <Link href="/" className="mb-6 inline-block text-sm underline">
          ← Back
        </Link>

        <h1 className="text-4xl font-bold">Create Your Story</h1>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A sleepy dragon, Daddy, Ava and Harrison..."
          className="mt-6 w-full rounded-xl border p-4"
        />

        <select
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
          className="mt-4 w-full rounded-xl border p-4"
        >
          <option value="2-4">2–4 years</option>
          <option value="5-7">5–7 years</option>
          <option value="8-10">8–10 years</option>
        </select>

        <button
          onClick={handleGenerate}
          className="mt-6 w-full rounded-xl bg-[#8b7cf6] px-6 py-3 font-semibold text-white"
        >
          Generate Story
        </button>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          {story || "Your story will appear here..."}
        </div>

      </div>
    </main>
  );
}