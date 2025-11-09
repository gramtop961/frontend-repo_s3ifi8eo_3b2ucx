import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FileText, Send, User } from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function KeyboardPanel() {
  const [activeTab, setActiveTab] = useState('');
  const [resumeOpen, setResumeOpen] = useState(false);

  const tabs = [
    { key: 'works', label: 'Works', icon: Briefcase },
    { key: 'resume', label: 'Resume', icon: FileText },
    { key: 'hire', label: 'Hire Me', icon: User },
    { key: 'contact', label: 'Contact', icon: Send },
  ];

  const toggleTab = (key) => {
    if (key === 'resume') {
      setResumeOpen(true);
      return;
    }
    setActiveTab((prev) => (prev === key ? '' : key));
  };

  return (
    <div className="relative z-20 -mt-16 mb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Keyboard-like control */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3 shadow-xl">
          <div className="grid grid-cols-4 gap-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => toggleTab(key)}
                className={`flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium transition hover:border-white/30 hover:bg-white/10 ${
                  activeTab === key ? 'bg-white text-black border-white' : 'text-white/90'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Panels */}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {activeTab === 'works' && (
              <motion.div
                key="works"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="rounded-xl border border-white/10 bg-zinc-950 p-5 text-white"
              >
                <h3 className="text-lg font-semibold">Recent Work</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>• Interactive 3D landing page with Spline</li>
                  <li>• SaaS dashboard with realtime charts</li>
                  <li>• Component system with accessibility best practices</li>
                </ul>
              </motion.div>
            )}
            {activeTab === 'hire' && (
              <motion.div
                key="hire"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="rounded-xl border border-white/10 bg-zinc-950 p-5 text-white"
              >
                <h3 className="text-lg font-semibold">Hire Me</h3>
                <p className="mt-2 text-sm text-white/80">I’m available for select freelance projects and collaborations.</p>
                <a href="#contact" className="mt-3 inline-block rounded-md bg-white px-4 py-2 text-black font-semibold">Start a conversation</a>
              </motion.div>
            )}
            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="rounded-xl border border-white/10 bg-zinc-950 p-5 text-white"
              >
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="mt-2 text-sm text-white/80">Reach me via the form below or at hello@example.com</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
