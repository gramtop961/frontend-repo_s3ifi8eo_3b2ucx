import { useState } from 'react';
import { Github, Mail, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-6 items-start lg:items-center text-sm font-medium">
      <li><a href="#about" className="hover:text-white/90 text-white/80">About</a></li>
      <li><a href="#projects" className="hover:text-white/90 text-white/80">Projects</a></li>
      <li><a href="#contact" className="hover:text-white/90 text-white/80">Contact</a></li>
      <li className="flex gap-4 pt-2 lg:pt-0">
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white"><Github size={18} /></a>
        <a href="#contact" aria-label="Email" className="text-white/70 hover:text-white"><Mail size={18} /></a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">MyPortfolio</a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white/80" aria-label="Toggle menu">
          <Menu />
        </button>
        <div className="hidden lg:block text-white">
          <NavLinks />
        </div>
      </nav>
      {open && (
        <div className="lg:hidden px-4 pb-4 text-white">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
