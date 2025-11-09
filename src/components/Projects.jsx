import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Aurora UI',
    description: 'Glassmorphism interface kit with motion presets and themes.',
    tags: ['React', 'Tailwind', 'Framer'],
    href: '#',
  },
  {
    title: 'Nebula 3D',
    description: 'Interactive hero built with Spline and scroll-driven motion.',
    tags: ['React', 'Spline', 'Scroll'],
    href: '#',
  },
  {
    title: 'Pulse Analytics',
    description: 'Realtime dashboard with crisp charts and live updates.',
    tags: ['React', 'API', 'WebSockets'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-zinc-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Selected Projects
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 hover:bg-white/10 transition flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <ExternalLink className="text-white/60 group-hover:text-white" size={18} />
              </div>
              <p className="mt-2 text-white/80 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-white/80 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
