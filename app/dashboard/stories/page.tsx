"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";
import { createClientInstance } from "@/lib/supabase/client";

type Story = {
  id: string;
  title: string;
  child_name: string | null;
  prompt: string | null;
  story_text: string;
  created_at: string;
};

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadStories() {
      try {
        const supabase = createClientInstance();

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          setError("You need to be logged in to view saved stories.");
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from("stories")
          .select("id, title, child_name, prompt, story_text, created_at")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) {
          setError(error.message);
          setLoading(false);
          return;
        }

        setStories(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not load stories.");
      } finally {
        setLoading(false);
      }
    }

    loadStories();
  }, []);

  return (
    <DashboardShell
      title="Your Stories"
      subtitle="View and manage saved bedtime stories."
    >
      {loading ? (
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm text-gray-600">Loading your saved stories...</p>
        </div>
      ) : error ? (
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      ) : stories.length === 0 ? (
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 px-6 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f6f1eb] text-black">
              <BookOpen size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black">
              No saved stories yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              When you start creating and saving bedtime stories, they’ll appear
              here for quick access whenever you need them.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f6f1eb] px-4 py-2 text-sm text-black">
              <Sparkles size={16} />
              Your first saved story will show up here
            </div>

            <Link
              href="/create"
              className="mt-8 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Create story
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-6">
          {stories.map((story) => (
            <article key={story.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-black">{story.title}</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {story.child_name ? `For ${story.child_name} • ` : ""}
                    {new Date(story.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {story.prompt && (
                <div className="mt-4 rounded-2xl bg-[#f6f1eb] p-4">
                  <p className="text-sm font-medium text-gray-700">Story idea</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {story.prompt}
                  </p>
                </div>
              )}

              <div className="mt-4 rounded-2xl bg-[#faf8ff] p-5">
                <p className="whitespace-pre-line text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                  {story.story_text}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}