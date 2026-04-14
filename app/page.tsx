import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6f3ff] via-[#f3f0ff] to-[#ede9fe] px-6 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight text-gray-800">
            🌙 Snorii
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              Log in
            </Link>

            <Link
              href="/create"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Create story
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-3xl text-center">
          <div className="mb-5 text-4xl">🌙✨</div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Create Tonight&apos;s Dreams
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calm your child, skip the stress, and create magical stories
            they&apos;ll love, every night.
          </p>

          <Link
            href="/create"
            className="mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Create your first story
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            Free to try • No signup needed • Safe, calming stories
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Already using Snorii?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Log in
            </Link>
          </p>
        </section>

        <section className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur">
            <h3 className="mb-3 text-sm font-semibold text-gray-500">
              Example story
            </h3>

            <p className="text-lg italic leading-8 text-gray-700">
              “Ava tiptoed through the quiet meadow as the moon shimmered
              above...”
            </p>

            <details className="group mt-5">
              <summary className="inline-flex cursor-pointer list-none items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-200">
                <span className="group-open:hidden">Read full story</span>
                <span className="hidden group-open:inline">Hide story</span>
              </summary>

              <div className="mt-5 rounded-2xl bg-[#faf8ff] p-6 text-left shadow-inner">
                <h4 className="mb-4 text-2xl font-semibold text-gray-900">
                  Ava and the Moonlit Meadow
                </h4>

                <div className="space-y-4 text-[17px] leading-8 text-gray-700">
                  <p>
                    Ava stepped softly into the meadow as the silver moon
                    shone above her. The grass swayed gently around her toes,
                    and the stars blinked as if they were whispering a secret
                    just for her.
                  </p>

                  <p>
                    In the middle of the meadow stood a tiny white unicorn
                    with a mane that shimmered like morning frost. It looked
                    at Ava with kind, sleepy eyes and dipped its head as
                    though inviting her closer.
                  </p>

                  <p>
                    “Would you like a moonlight walk?” the little unicorn
                    seemed to say. Ava smiled and nodded. Together they
                    wandered through the quiet field, where glowing flowers
                    opened one by one, filling the air with a sweet, calming
                    scent.
                  </p>

                  <p>
                    Soon, Ava began to feel warm and wonderfully sleepy. The
                    unicorn led her to a soft patch of clover, where she lay
                    back and watched the stars twinkle above. One by one, they
                    seemed to sing her a lullaby.
                  </p>

                  <p>
                    As Ava&apos;s eyes grew heavier, the unicorn curled beside her
                    like a fluffy cloud. Wrapped in moonlight and quiet magic,
                    Ava drifted into the softest, happiest sleep, dreaming of
                    stars, meadows, and gentle midnight adventures.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl text-center">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-gray-900">
            How it works
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-3 text-2xl">✏️</div>
              <p className="text-lg font-medium">Enter your child&apos;s name</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-3 text-2xl">💡</div>
              <p className="text-lg font-medium">Add a story idea</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-3 text-2xl">🌙</div>
              <p className="text-lg font-medium">Get a calming story instantly</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl text-center">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-gray-900">
            Why parents love Snorii
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-3 text-2xl">😴</div>
              <p className="text-lg font-medium">Easier bedtimes</p>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Calm, soothing stories designed to help children wind down.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-3 text-2xl">✨</div>
              <p className="text-lg font-medium">Personalised magic</p>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Your child becomes the hero of every story.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-3 text-2xl">⏱️</div>
              <p className="text-lg font-medium">Zero effort</p>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                No prep, no thinking — just press generate.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Trusted by tired parents
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Built to make bedtime feel calmer, easier, and a little more magical.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-4 text-yellow-500">★★★★★</div>
              <p className="text-base leading-7 text-gray-700">
                “My daughter asked for a Snorii story again the very next night.
                It instantly felt more personal than reading the same book again.”
              </p>
              <p className="mt-5 text-sm font-medium text-gray-500">
                Sarah, mum of one
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-4 text-yellow-500">★★★★★</div>
              <p className="text-base leading-7 text-gray-700">
                “This takes the pressure off when you&apos;re exhausted and still want
                bedtime to feel special.”
              </p>
              <p className="mt-5 text-sm font-medium text-gray-500">
                James, dad of two
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="mb-4 text-yellow-500">★★★★★</div>
              <p className="text-base leading-7 text-gray-700">
                “A really lovely idea. Quick, simple, and surprisingly calming.
                It feels made for real evenings with real kids.”
              </p>
              <p className="mt-5 text-sm font-medium text-gray-500">
                Emma, mum of two
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-[32px] bg-white p-8 shadow-md md:p-10">
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <div className="mb-3 text-2xl">🔒</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Child-friendly by design
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Gentle, bedtime-appropriate stories designed to feel safe and soothing.
                </p>
              </div>

              <div>
                <div className="mb-3 text-2xl">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Ready in seconds
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  No prep, no searching, no last-minute panic when it&apos;s already bedtime.
                </p>
              </div>

              <div>
                <div className="mb-3 text-2xl">💜</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Made for real routines
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Built to help busy parents create a calmer, more special end to the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 pb-10 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Ready for an easier bedtime?
          </h3>

          <Link
            href="/create"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Create your first story →
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Log in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}