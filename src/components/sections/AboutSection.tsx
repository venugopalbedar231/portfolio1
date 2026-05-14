"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Coffee, Zap } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 },
  }),
};

function StatCard({ value, label, icon, index }: { value: string; label: string; icon: string; index: number }) {
  const iconMap: Record<string, React.ReactNode> = {
    Rocket: <Zap size={18} className="text-neon-purple" />,
    Calendar: <Coffee size={18} className="text-neon-blue" />,
    Code2: <GraduationCap size={18} className="text-neon-cyan" />,
    Star: <MapPin size={18} className="text-neon-pink" />,
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="glass-bright border border-border rounded-2xl p-6 shine gradient-border group hover:border-neon-purple/20 transition-all duration-500"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center">
          {iconMap[icon]}
        </div>
      </div>
      <div className="font-display text-4xl font-extrabold gradient-text-full mb-1">
        {value}
      </div>
      <div className="font-body text-sm text-text-secondary">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle radial */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-cyan text-sm tracking-[0.25em] uppercase mb-3">
            01. About
          </p>
          {/* <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
            A developer who{" "}
            <span className="gradient-text-purple">ships things</span>
          </h2> */}
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bio card — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 glass border border-border rounded-2xl p-8 shine gradient-border group hover:border-neon-purple/20 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-6">
              {/* Avatar placeholder */}
              <div className="relative shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border border-border-bright"
                  style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.3))" }}>
                  
<Image src="/your-photo.png" alt="Venugopal Bedar" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-background" />
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-1">
                  {personalInfo.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-neon-cyan" />
                    {personalInfo.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap size={13} className="text-neon-purple" />
                    B.Tech Computer Science
                  </span>
                </div><br />
                
              </div>
            </div>

            <p className="font-body text-text-secondary leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            {/* <p className="font-body text-text-secondary leading-relaxed">
              {personalInfo.bio2}
            </p> */}

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Problem Solver", "Fast Learner", "Team Player", "Detail Oriented"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 glass border border-border rounded-full font-mono text-xs text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Currently reading / fun fact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass border border-border rounded-2xl p-6 shine gradient-border group hover:border-neon-cyan/20 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center mb-4">
                <Coffee size={18} className="text-neon-cyan" />
              </div>
              <h4 className="font-display font-semibold text-text-primary mb-2">Currently</h4>
              <p className="font-body text-sm text-text-secondary">
                {personalInfo.bio2}
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl" style={{ background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.15)" }}>
              <p className="font-mono text-xs text-neon-cyan">
                &gt; Currently learning: ML & WebAssembly
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
