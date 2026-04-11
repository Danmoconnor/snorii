export default function Footer() {
  return (
    <footer className="bg-[#1f1b35] text-white px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-lg font-bold">Snorii</div>

        <div className="flex gap-6 text-sm text-white/70">
          <button className="hover:text-white">Privacy</button>
          <button className="hover:text-white">Terms</button>
          <button className="hover:text-white">Contact</button>
        </div>

        <div className="text-sm text-white/50">
          © {new Date().getFullYear()} Snorii
        </div>

      </div>
    </footer>
  );
}