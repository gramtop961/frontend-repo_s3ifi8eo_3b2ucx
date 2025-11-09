import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 leading-relaxed"
          >
            I craft responsive, accessible interfaces with a focus on performance and motion. My toolkit includes React, TypeScript, Tailwind, and 3D tools like Spline and Three.js. I love turning complex ideas into simple, enjoyable products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              'React & TypeScript',
              'Tailwind & CSS Architecture',
              'Framer Motion',
              'Spline / Three.js',
              'FastAPI & Node APIs',
              'Testing & CI',
            ].map((skill) => (
              <div key={skill} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/90">
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
