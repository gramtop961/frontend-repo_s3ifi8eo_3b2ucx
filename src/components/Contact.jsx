import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative bg-transparent text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-10 left-20 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Contact
        </motion.h2>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">
          <input required className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-white/30" placeholder="Your name" />
          <input required type="email" className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-white/30" placeholder="Email" />
          <textarea required rows={5} className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-white/30" placeholder="Message" />
          <button type="submit" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition w-fit">Send</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
        <p className="mt-10 text-white/50 text-sm">Prefer email? astraea@studio.dev</p>
      </div>
    </section>
  );
}
