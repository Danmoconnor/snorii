"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Mail,
  User,
  LogOut,
  Moon,
  Plus,
  Menu,
  X,
} from "lucide-react";
import { createClientInstance } from "@/lib/supabase/client";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

type UserState = {
  email?: string;
} | null;

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Stories", href: "/dashboard/stories", icon: BookOpen },
  { label: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  { label: "Contact", href: "/dashboard/contact", icon: Mail },
  { label: "Account", href: "/dashboard/account", icon: User },
];

export default function DashboardShell({ title, subtitle, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<UserState>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showCreateButton = pathname !== "/dashboard/account";

  useEffect(() => {
    const supabase = createClientInstance();

    async function loadUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.replace("/login");
        return;
      }

      setUser(data.user);
      setLoading(false);
    }

    loadUser();
  }, [router]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  async function handleLogout() {
    const supabase = createClientInstance();
    await supabase.auth.signOut();
    router.replace("/login");
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f6f1eb] px-4">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-black">Loading your dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f6f1eb]">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 border-r border-gray-200 bg-white p-6 transition-transform duration-200
          md:static md:translate-x-0
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
              <Moon size={20} />
            </div>
            <div>
              <p className="text-xl font-bold text-black">Snorii</p>
              <p className="text-sm text-gray-500">Sleep made simple</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg p-2 text-black hover:bg-gray-100 md:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:bg-[#f6f1eb]"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 rounded-2xl bg-[#f6f1eb] p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Logged in as
          </p>
          <p className="mt-2 break-words text-sm font-medium text-black">
            {user?.email}
          </p>

          <button
            onClick={handleLogout}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-gray-50"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 md:min-w-0">
        <div className="border-b border-gray-200 bg-[#f6f1eb] px-6 py-4 md:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="rounded-lg border border-gray-300 bg-white p-2 text-black"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>

              <div>
                <p className="text-lg font-bold text-black">Snorii</p>
                <p className="text-xs text-gray-500">Sleep made simple</p>
              </div>
            </div>

            {showCreateButton && (
              <Link
                href="/create"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                <Plus size={16} />
                Create story
              </Link>
            )}
          </div>
        </div>

        <main className="p-6 md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">{title}</h1>
              {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
            </div>

            {showCreateButton && (
              <Link
                href="/create"
                className="hidden md:inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <Plus size={16} />
                Create story
              </Link>
            )}
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}