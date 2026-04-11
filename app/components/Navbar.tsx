export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 flex w-full items-center justify-between px-6 py-4 text-white">
      <div className="text-lg font-bold">Snorii</div>

      <div className="hidden items-center gap-6 sm:flex">
        <button className="hover:opacity-80">How it works</button>
        <button className="hover:opacity-80">Pricing</button>
        <button className="rounded-lg bg-white px-4 py-2 font-semibold text-[#1f1b35]">
          Sign In
        </button>
      </div>
    </nav>
  );
}