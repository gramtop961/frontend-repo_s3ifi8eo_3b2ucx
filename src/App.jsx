import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 text-white/60">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
          <a href="#home" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
