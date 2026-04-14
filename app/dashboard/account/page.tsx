"use client";

import { KeyRound, UserCircle2 } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";

export default function AccountPage() {
  return (
    <DashboardShell
      title="Your Account"
      subtitle="Manage your profile and account preferences."
    >
      <div className="space-y-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6f1eb]">
              <UserCircle2 size={20} />
            </div>
            <h2 className="text-xl font-semibold text-black">Profile</h2>
          </div>

          <p className="mt-4 text-gray-600">
            Manage your account details and preferences here.
          </p>

          <div className="mt-6 rounded-2xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">Email address</p>
            <p className="mt-2 font-medium text-black">
              Your login email appears in the sidebar.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6f1eb]">
              <KeyRound size={20} />
            </div>
            <h2 className="text-xl font-semibold text-black">Password</h2>
          </div>

          <p className="mt-4 text-gray-600">
            Password reset and security options can be added here next.
          </p>

          <button className="mt-6 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white">
            Reset Password
          </button>
        </div>
      </div>
    </DashboardShell>
  );
}