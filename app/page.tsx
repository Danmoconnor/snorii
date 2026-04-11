import Link from "next/link"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#efedf3] text-[#1f1b35]">
      <section className="relative bg-gradient-to-b from-[#1f1b35] to-[#2a2550] px-6 py-32 text-center text-white">
        <Navbar />

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Create magical bedtime stories in seconds
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          AI-powered personalized stories that help your little ones drift into peaceful dreams
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
  href="/create"
  className="rounded-xl bg-[#8b7cf6] px-6 py-3 font-semibold text-white transition hover:opacity-90"
>
  Create Your Story
</Link>
          <button className="rounded-xl border border-white/30 bg-white px-6 py-3 font-semibold text-[#1f1b35] transition hover:opacity-90">
            View Library
          </button>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold">How It Works</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-[#ddd6ea] bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#efe9ff] text-2xl">
                📖
              </div>
              <h3 className="mt-6 text-xl font-semibold">1. Enter a Prompt</h3>
              <p className="mt-3 text-[#6b6780]">Tell us what your child loves</p>
            </div>

            <div className="rounded-3xl border border-[#ddd6ea] bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#efe9ff] text-2xl">
                ⭐
              </div>
              <h3 className="mt-6 text-xl font-semibold">2. Choose Age Range</h3>
              <p className="mt-3 text-[#6b6780]">
                We&apos;ll match the story to their level
              </p>
            </div>

            <div className="rounded-3xl border border-[#ddd6ea] bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#efe9ff] text-2xl">
                ✨
              </div>
              <h3 className="mt-6 text-xl font-semibold">3. Get Your Story</h3>
              <p className="mt-3 text-[#6b6780]">Ready to read in seconds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#8c83b8] to-[#6e668e] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl bg-white shadow-md">
              <div className="h-64 bg-[#b8dfe3]" />
              <div className="p-6">
                <p className="text-sm text-[#8b7cf6]">2–4 years</p>
                <h3 className="mt-3 text-2xl font-semibold">The Sleepy Dragon</h3>
                <p className="mt-3 text-[#6b6780]">
                  A gentle tale about a dragon learning to sleep
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-md">
              <div className="h-64 bg-[#203245]" />
              <div className="p-6">
                <p className="text-sm text-[#8b7cf6]">5–7 years</p>
                <h3 className="mt-3 text-2xl font-semibold">Adventures in Dreamland</h3>
                <p className="mt-3 text-[#6b6780]">
                  Explore magical worlds under the starry sky
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-md">
              <div className="h-64 bg-[#f0d7b7]" />
              <div className="p-6">
                <p className="text-sm text-[#8b7cf6]">8–10 years</p>
                <h3 className="mt-3 text-2xl font-semibold">The Peaceful Garden</h3>
                <p className="mt-3 text-[#6b6780]">
                  A calming journey through a mystical garden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#efe9ff] text-2xl text-[#6d5bd0]">
                🪄
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Personalized Stories</h3>
              <p className="mx-auto mt-4 max-w-xs text-[#6b6780]">
                Every story is unique and tailored to your child&apos;s interests
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#efe9ff] text-2xl text-[#6d5bd0]">
                🌙
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Bedtime Optimized</h3>
              <p className="mx-auto mt-4 max-w-xs text-[#6b6780]">
                Calming narratives designed to help children wind down
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#efe9ff] text-2xl text-[#6d5bd0]">
                💜
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Made with Love</h3>
              <p className="mx-auto mt-4 max-w-xs text-[#6b6780]">
                AI-powered stories with heart and imagination
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#8a7be8] to-[#6f63c8] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-5xl">👑</div>
          <h2 className="mt-6 text-4xl font-bold">Upgrade to Premium</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Save unlimited stories, access your library from anywhere, and enjoy ad-free reading
          </p>
          <p className="mt-10 text-5xl font-bold">
            £4.99<span className="text-2xl font-medium">/month</span>
          </p>
          <button className="mt-8 rounded-2xl bg-[#e0b72c] px-8 py-4 text-lg font-semibold text-[#1f1b35] transition hover:opacity-90">
            Get Premium
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}