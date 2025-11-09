import { useState, useRef, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Info } from 'lucide-react';

// 3D girl showcase under the hero. Clicking left/right turns the context panel.
export default function GirlShowcase({
  scene = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
}) {
  const [side, setSide] = useState('right'); // 'left' -> Personal Info, 'right' -> Introduction
  const splineRef = useRef(null);

  const onLoad = useCallback((app) => {
    splineRef.current = app;
    // Optionally you can preload or set camera, but we keep it simple and stable.
  }, []);

  const handleLeft = () => setSide('left');
  const handleRight = () => setSide('right');

  return (
    <section className="relative py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[420px] sm:h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
          <Spline onLoad={onLoad} scene={scene} style={{ width: '100%', height: '100%' }} />

          {/* Soft vignette that does not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Click zones for left/right to change context */}
          <div className="absolute inset-y-0 left-0 w-1/2 cursor-pointer" onClick={handleLeft} aria-label="Show personal info" />
          <div className="absolute inset-y-0 right-0 w-1/2 cursor-pointer" onClick={handleRight} aria-label="Show introduction" />

          {/* Small helper controls for accessibility */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button onClick={handleLeft} className="rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur hover:bg-white/10">Turn Left</button>
            <button onClick={handleRight} className="rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur hover:bg-white/10">Turn Right</button>
          </div>

          {/* Info panel that changes with side */}
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
                    <h3 className="text-base sm:text-lg font-semibold">Hi, I’m your 3D guide</h3>
                    <p className="mt-1 text-sm text-white/80">
                      Welcome to my world of interactive design and frontend engineering. I love crafting smooth, immersive
                      3D experiences with React, Spline, and delightful motion.
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
                      <li>• Based in: Your City</li>
                      <li>• Focus: WebGL, UI Engineering, Design Systems</li>
                      <li>• Available for: Freelance & Full-time</li>
                      <li>• Email: hello@example.com</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="mt-3 text-center text-sm text-white/60">Tip: Tap/click the left or right side to switch info.</p>
      </div>
    </section>
  );
}
