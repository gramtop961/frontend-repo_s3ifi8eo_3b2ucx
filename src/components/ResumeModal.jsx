import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-[92vw] max-w-2xl rounded-xl border border-white/10 bg-zinc-950 p-6 text-white shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Resume</h3>
              <button onClick={onClose} className="text-white/70 hover:text-white">✕</button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p className="text-white/90">Frontend Developer • 5+ years</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Builds modern, responsive web apps with React and Tailwind.</li>
                <li>Creates interactive 3D and motion experiences with Spline and Framer Motion.</li>
                <li>Collaborates end-to-end: design, development, and optimization.</li>
              </ul>
              <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <p className="font-medium text-white">Skills</p>
                  <p className="text-white/70">React, TypeScript, Tailwind, Framer Motion, FastAPI</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <p className="font-medium text-white">Tools</p>
                  <p className="text-white/70">Vite, GitHub, Storybook, Spline, Figma</p>
                </div>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-block mt-2 px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-white/90"
              >
                Contact for full resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
