import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" ref={ref} className="relative bg-transparent text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div style={{ y, opacity }} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold">About Astraea</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m a creative developer and designer who blends art direction with code. My work balances elegance and
            performance — using motion, 3D, and thoughtful systems to tell stories that feel alive.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              'React, TypeScript, Tailwind',
              'Three.js / Spline',
              'Framer Motion / GSAP',
              'Design Systems',
              'Shader Art & WebGL',
              'UX Microinteractions',
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/90">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
