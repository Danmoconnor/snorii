"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardShell from "@/components/dashboard-shell";
import { createClientInstance } from "@/lib/supabase/client";

type DashboardCardProps = {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
};

function DashboardCard({
  title,
  description,
  buttonText,
  onClick,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-black">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
      <button
        onClick={onClick}
        className="mt-5 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [storyCount, setStoryCount] = useState(0);
  const [loadingCount, setLoadingCount] = useState(true);

  useEffect(() => {
    async function loadStoryCount() {
      try {
        const supabase = createClientInstance();

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          setLoadingCount(false);
          return;
        }

        const { count, error } = await supabase
          .from("stories")
          .select("*", { count: "exact", head: true })
          .eq("user_id", user.id);

        if (error) {
          setLoadingCount(false);
          return;
        }

        setStoryCount(count || 0);
      } catch {
        setLoadingCount(false);
      } finally {
        setLoadingCount(false);
      }
    }

    loadStoryCount();
  }, []);

  return (
    <DashboardShell
      title="Welcome back"
      subtitle="Manage your stories, subscription, support and account in one place."
    >
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-black p-6 text-white shadow-sm">
          <p className="text-sm uppercase tracking-wide text-gray-300">
            Saved Stories
          </p>
          <p className="mt-3 text-3xl font-bold">
            {loadingCount ? "..." : storyCount}
          </p>
          <p className="mt-2 text-sm text-gray-300">
            {loadingCount
              ? "Loading your saved stories..."
              : storyCount === 0
              ? "Your sleep stories and saved content will appear here."
              : `You have ${storyCount} saved ${
                  storyCount === 1 ? "story" : "stories"
                } ready to revisit.`}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Subscription
          </p>
          <p className="mt-3 text-2xl font-bold text-black">Free Plan</p>
          <p className="mt-2 text-sm text-gray-600">
            Upgrade later for more stories, premium content and features.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Support
          </p>
          <p className="mt-3 text-2xl font-bold text-black">Need help?</p>
          <p className="mt-2 text-sm text-gray-600">
            Contact us if you need support with your account or subscription.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Saved Stories"
          description="View, revisit and manage the bedtime stories you’ve saved for later."
          buttonText="View Stories"
          onClick={() => router.push("/dashboard/stories")}
        />

        <DashboardCard
          title="Manage Subscription"
          description="Review your current plan, billing details and future upgrade options."
          buttonText="Manage Plan"
          onClick={() => router.push("/dashboard/subscription")}
        />

        <DashboardCard
          title="Contact Us"
          description="Get in touch for support, feedback or questions about Snorii."
          buttonText="Contact Support"
          onClick={() => router.push("/dashboard/contact")}
        />

        <DashboardCard
          title="Account Settings"
          description="Update your profile, password and account preferences."
          buttonText="Manage Account"
          onClick={() => router.push("/dashboard/account")}
        />
      </div>
    </DashboardShell>
  );
}