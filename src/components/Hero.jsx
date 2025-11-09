import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast; pointer-events-none so it doesn't block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-24 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight"
        >
          Building interactive, modern web experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl"
        >
          I’m a frontend developer who blends delightful UI with real-world performance — exploring 3D, motion, and thoughtful design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex gap-3"
        >
          <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition">View Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 text-white font-semibold">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
