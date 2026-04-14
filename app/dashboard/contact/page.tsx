"use client";

import { Mail, MessageCircle } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";

export default function ContactPage() {
  return (
    <DashboardShell
      title="We’re here to help"
      subtitle="Support for your account, stories and subscription."
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6f1eb]">
            <MessageCircle size={20} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">Support</h2>
            <p className="text-sm text-gray-500">Reach out to the Snorii team</p>
          </div>
        </div>

        <p className="mt-6 text-gray-600">
          Need help with your account, stories or subscription? Reach out and
          we’ll get back to you as soon as we can.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Mail size={16} />
              Email
            </div>
            <p className="mt-2 font-medium text-black">support@snorii.com</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">Response time</p>
            <p className="mt-2 font-medium text-black">
              Usually within 1–2 business days
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}