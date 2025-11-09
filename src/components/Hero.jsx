import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[86vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0d0d16] to-black text-white">
      {/* Floating pastel particles / blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute top-32 -right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16 flex flex-col items-start">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm tracking-widest text-white/60 uppercase"
        >
          Astraea — Creative Developer & Designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
        >
          Crafting beauty through code and imagination.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl"
        >
          Futuristic, elegant, and immersive experiences with soft pastel lighting, subtle 3D motion, and thoughtful detail.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex gap-3"
        >
          <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition">Explore Projects</a>
          <a href="#about" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 text-white font-semibold">About Astraea</a>
        </motion.div>
      </div>
    </section>
  );
}
