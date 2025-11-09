import { useState, useRef, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Info } from 'lucide-react';

// 3D girl showcase under the hero. Tap/click left/right side to switch panels.
// No on-screen turn buttons; you can freely rotate the model.
export default function GirlShowcase({
  scene = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
}) {
  const [side, setSide] = useState('right'); // 'left' -> Personal Info, 'right' -> Introduction
  const splineRef = useRef(null);

  // Track tap vs drag to avoid switching while user is rotating the model
  const downRef = useRef({ x: 0, y: 0, t: 0, isDown: false });
  const containerRef = useRef(null);

  const onLoad = useCallback((app) => {
    splineRef.current = app;
  }, []);

  const onPointerDownCapture = (e) => {
    downRef.current = { x: e.clientX, y: e.clientY, t: Date.now(), isDown: true };
  };

  const onPointerUpCapture = (e) => {
    const start = downRef.current;
    downRef.current.isDown = false;
    const dx = Math.abs(e.clientX - start.x);
    const dy = Math.abs(e.clientY - start.y);
    const dt = Date.now() - start.t;

    // Treat as a tap if quick and with little movement
    const isTap = dx < 12 && dy < 12 && dt < 350;
    if (!isTap || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    if (e.clientX < midX) {
      setSide('left');
    } else {
      setSide('right');
    }
  };

  return (
    <section className="relative py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={containerRef}
          className="relative w-full h-[420px] sm:h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40"
          onPointerDownCapture={onPointerDownCapture}
          onPointerUpCapture={onPointerUpCapture}
        >
          <Spline onLoad={onLoad} scene={scene} style={{ width: '100%', height: '100%' }} />

          {/* Soft vignette that does not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

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
        <p className="mt-3 text-center text-sm text-white/60">Tip: Tap/click the left or right side to switch info. You can freely rotate the 3D model.</p>
      </div>
    </section>
  );
}
