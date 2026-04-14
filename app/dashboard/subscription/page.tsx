"use client";

import { CreditCard, Crown } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";

export default function SubscriptionPage() {
  return (
    <DashboardShell
      title="Manage Your Plan"
      subtitle="Review your current subscription and future upgrade options."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6f1eb]">
              <CreditCard size={20} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Current Plan
              </p>
              <h2 className="text-2xl font-bold text-black">Free Plan</h2>
            </div>
          </div>

          <p className="mt-4 text-gray-600">
            You’re currently on the free Snorii plan.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Crown size={20} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Upgrade Options
              </p>
              <h2 className="text-2xl font-bold text-black">Premium Coming Soon</h2>
            </div>
          </div>

          <p className="mt-4 text-gray-600">
            Premium could include unlimited stories, exclusive content and more
            personalised sleep routines.
          </p>

          <button className="mt-6 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white">
            Upgrade Soon
          </button>
        </div>
      </div>
    </DashboardShell>
  );
}