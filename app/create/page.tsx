"use client";

import { useState } from "react";
import Link from "next/link";

type StoryResult = {
  title: string;
  story: string;
};

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [childName, setChildName] = useState("");
  const [ageRange, setAgeRange] = useState("2-4");
  const [tone, setTone] = useState<"sleepier" | "adventurous">("sleepier");
  const [storyResult, setStoryResult] = useState<StoryResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a story idea first.");
      return;
    }

    setIsLoading(true);
    setError("");
    setStoryResult(null);

    try {
      const res = await fetch("/api/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          childName,
          ageRange,
          tone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate story.");
      }

      setStoryResult({
        title: data.title,
        story: data.story,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAnother = () => {
    setPrompt("");
    setChildName("");
    setAgeRange("2-4");
    setTone("sleepier");
    setStoryResult(null);
    setError("");
  };

  const handleReadAgain = () => {
    if (!storyResult) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSaveStory = () => {
    if (!storyResult) return;
    alert("Save Story will be connected to user accounts and library next.");
  };

  return (
    <main className="min-h-screen bg-[#f3f0f8] text-[#1f1b35]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-lg border border-[#ddd6ea] bg-white px-4 py-2 text-sm font-medium hover:bg-[#faf8fe]"
        >
          ← Back
        </Link>

        <div className="rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <h1 className="text-4xl font-bold md:text-5xl">Create Your Story</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#6b6780]">
            Tell Snorii who the story is about and we’ll create a calming bedtime adventure.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#433d5c]">
                Child name
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Example: Simon"
                className="w-full rounded-2xl border border-[#ddd6ea] px-5 py-4 outline-none focus:border-[#8b7cf6]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#433d5c]">
                Age range
              </label>
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                className="w-full rounded-2xl border border-[#ddd6ea] px-5 py-4 outline-none focus:border-[#8b7cf6]"
              >
                <option value="2-4">2–4 years</option>
                <option value="5-7">5–7 years</option>
                <option value="8-10">8–10 years</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-[#433d5c]">
              Story idea
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: A sleepy bunny who goes on a moonlit adventure through the clouds"
              className="min-h-[150px] w-full rounded-2xl border border-[#ddd6ea] px-5 py-4 outline-none focus:border-[#8b7cf6]"
            />
          </div>

          <div className="mt-4">
            <label className="mb-3 block text-sm font-semibold text-[#433d5c]">
              Story tone
            </label>
            <div className="inline-flex rounded-2xl bg-[#f5f1ff] p-1">
              <button
                type="button"
                onClick={() => setTone("sleepier")}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  tone === "sleepier"
                    ? "bg-[#8b7cf6] text-white"
                    : "text-[#5d5777]"
                }`}
              >
                🌙 Sleepier
              </button>
              <button
                type="button"
                onClick={() => setTone("adventurous")}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  tone === "adventurous"
                    ? "bg-[#8b7cf6] text-white"
                    : "text-[#5d5777]"
                }`}
              >
                ✨ More Adventurous
              </button>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="mt-6 w-full rounded-2xl bg-[#8b7cf6] px-6 py-4 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {isLoading ? "Generating..." : "Generate Story"}
          </button>

          {error ? (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
              {error}
            </div>
          ) : null}
        </div>

        <div className="mt-10 rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          {!storyResult ? (
            <div className="rounded-2xl bg-[#faf8fe] p-8 text-[#7a7590]">
              Your story will appear here...
            </div>
          ) : (
            <article className="rounded-3xl bg-gradient-to-b from-[#fffdf8] to-[#f9f5ff] p-8 shadow-inner">
              <div className="mb-4 text-center text-4xl">🌙✨</div>

              <div className="mb-6 text-center">
                <div className="inline-flex rounded-full bg-[#efe9ff] px-4 py-2 text-sm font-medium text-[#6d5bd0]">
                  Bedtime Story
                </div>
              </div>

              <h2 className="text-center text-3xl font-bold md:text-4xl">
                {storyResult.title}
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-[#433d5c]">
                {storyResult.story
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleReadAgain}
                  className="rounded-2xl border border-[#d8d0f2] bg-white px-5 py-3 font-semibold text-[#5e52a8] transition hover:bg-[#f7f4ff]"
                >
                  Read Again
                </button>

                <button
                  onClick={handleCreateAnother}
                  className="rounded-2xl border border-[#d8d0f2] bg-white px-5 py-3 font-semibold text-[#5e52a8] transition hover:bg-[#f7f4ff]"
                >
                  Create Another
                </button>

                <button
                  onClick={handleSaveStory}
                  className="rounded-2xl bg-[#8b7cf6] px-5 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Save Story
                </button>
              </div>
            </article>
          )}
        </div>
      </div>
    </main>
  );
}