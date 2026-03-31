export default function Footer() {
  return (
    <footer className="bg-[#020b18] border-t border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold tracking-widest text-lg">SENMARES</p>
          <p className="text-slate-500 text-sm">Naval Electronics</p>
        </div>

        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Senmares. All rights reserved.
        </p>
      </div>
    </footer>
  );
}