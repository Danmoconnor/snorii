import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type SavedStory = {
  id: string;
  title: string;
  story: string;
  created_at: string;
};

export default async function LibraryPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("stories")
    .select("id, title, story, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="p-8">Failed to load stories.</div>;
  }

  const stories: SavedStory[] = data ?? [];

  return (
    <main className="min-h-screen bg-[#f3f0f8] px-6 py-16 text-[#1f1b35]">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Your Library</h1>
        <p className="mt-3 text-[#6b6780]">
          Saved bedtime stories, ready whenever you need them.
        </p>

        <div className="mt-10 grid gap-6">
          {stories.length ? (
            stories.map((story) => (
              <article
                key={story.id}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-semibold">{story.title}</h2>
                <p className="mt-2 text-sm text-[#7b7692]">
                  {new Date(story.created_at).toLocaleDateString("en-GB")}
                </p>
                <p className="mt-5 whitespace-pre-wrap leading-8 text-[#433d5c]">
                  {story.story}
                </p>
              </article>
            ))
          ) : (
            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              You haven’t saved any stories yet.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}