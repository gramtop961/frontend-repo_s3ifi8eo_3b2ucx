import { useState, useRef, useCallback, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { User, Info } from 'lucide-react';

// 3D girl showcase under the hero. Scroll subtly rotates the model and swaps panels.
export default function GirlShowcase({
  scene = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
}) {
  const [side, setSide] = useState('right'); // 'left' -> Personal Info, 'right' -> Introduction
  const splineRef = useRef(null);
  const containerRef = useRef(null);

  const onLoad = useCallback((app) => {
    splineRef.current = app;
  }, []);

  // Scroll-driven rotation and panel switching
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], ['-6deg', '0deg', '6deg']);
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0px', '20px']);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.35) {
        setSide('right'); // Intro
      } else if (v >= 0.35) {
        setSide('left'); // Personal info
      }
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section className="relative py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={containerRef}
          style={{ rotateY, y: yParallax }}
          className="relative w-full h-[420px] sm:h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40 will-change-transform"
        >
          <Spline onLoad={onLoad} scene={scene} style={{ width: '100%', height: '100%' }} />

          {/* Soft vignette that does not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Info panel that changes with scroll side */}
          <AnimatePresence mode="wait">
            {side === 'right' ? (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[80%] rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-white/10 p-2"><Info size={18} /></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">Hi, I’m Astraea</h3>
                    <p className="mt-1 text-sm text-white/80">
                      Crafting beauty through code and imagination — blending elegant UI, motion, and playful 3D to build immersive web experiences.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[80%] rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-white/10 p-2"><User size={18} /></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">Personal Info</h3>
                    <ul className="mt-1 text-sm text-white/80 space-y-1">
                      <li>• Skills: React, Three.js/Spline, Framer Motion, Tailwind</li>
                      <li>• Education: B.Des — Interaction & Visual Design</li>
                      <li>• Interests: Generative art, shaders, typography</li>
                      <li>• Location: Remote-friendly</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <p className="mt-3 text-center text-sm text-white/60">Scroll to subtly rotate the 3D avatar. As you continue, personal info slides in. Contact follows below.</p>
      </div>
    </section>
  );
}
