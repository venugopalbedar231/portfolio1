"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Twitter, Mail, MapPin, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub", color: "#f0f0ff" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "#0a66c2" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter", color: "#1da1f2" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "#a855f7" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-purple/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-neon-cyan text-sm tracking-[0.25em] uppercase mb-3">
            07. Contact
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-text-primary mb-4 leading-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text-full">amazing</span>{" "}
            together
          </h2>
          <p className="font-body text-text-secondary max-w-xl mx-auto text-lg">
            Have a project in mind or just want to chat? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            <div className="glass border border-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center">
                  <Mail size={16} className="text-neon-purple" />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted mb-0.5">Email</p>
                  <p className="font-body text-sm text-text-primary">{personalInfo.email}</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center">
                  <MapPin size={16} className="text-neon-cyan" />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted mb-0.5">Location</p>
                  <p className="font-body text-sm text-text-primary">{personalInfo.location}</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted mb-0.5">Status</p>
                  <p className="font-body text-sm text-green-400">Available for opportunities</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass border border-border rounded-2xl p-6">
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
                Find me online
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2.5 px-3 py-2.5 glass-bright border border-border rounded-xl hover:border-opacity-60 transition-all duration-300 group"
                  >
                    <Icon size={15} style={{ color }} className="flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block font-mono text-xs text-text-muted tracking-wider uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text-primary placeholder-text-muted font-body text-sm focus:outline-none focus:border-neon-purple/50 focus:shadow-glow-sm-purple transition-all duration-300"
                    />
                  </div>

                  <div className="group">
                    <label className="block font-mono text-xs text-text-muted tracking-wider uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text-primary placeholder-text-muted font-body text-sm focus:outline-none focus:border-neon-purple/50 focus:shadow-glow-sm-purple transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-text-muted tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text-primary placeholder-text-muted font-body text-sm focus:outline-none focus:border-neon-purple/50 focus:shadow-glow-sm-purple transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-display font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70"
                  style={{
                    background: sent
                      ? "linear-gradient(135deg, #22c55e, #16a34a)"
                      : "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)",
                    boxShadow: "0 0 30px rgba(168,85,247,0.3)",
                  }}
                >
                  {sent ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
