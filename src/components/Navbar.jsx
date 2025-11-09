import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-white">
        <a href="#home" className="font-semibold tracking-wide">Astraea</a>
        <div className="flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
