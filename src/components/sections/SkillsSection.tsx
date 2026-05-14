"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, techMarquee } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend: "#a855f7",
  Backend: "#3b82f6",
  "AI/ML": "#06b6d4",
  Tools: "#ec4899",
};

function SkillPill({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      className="skill-card flex items-center gap-2.5 px-4 py-2.5 glass border border-border rounded-xl hover:border-neon-purple/40 transition-all duration-300 cursor-default"
    >
      <span className="skill-icon text-lg transition-all duration-300">{icon}</span>
      <span className="font-body text-sm text-text-secondary font-medium whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 glass border border-border rounded-full whitespace-nowrap group hover:border-neon-cyan/40 transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60 group-hover:bg-neon-cyan transition-colors" />
            <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { key: "Frontend", label: "Frontend", data: skills.frontend },
    { key: "Backend", label: "Backend", data: skills.backend },
    { key: "AI/ML", label: "AI / ML", data: skills.aiml },
    { key: "Tools", label: "Tools & DevOps", data: skills.tools },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-cyan text-sm tracking-[0.25em] uppercase mb-3">
            05. Skills
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
            My tech{" "}
            <span className="gradient-text-full">arsenal</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIndex * 0.12 }}
              className="glass border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: categoryColors[cat.key] }}
                />
                <h3
                  className="font-display font-semibold text-lg"
                  style={{ color: categoryColors[cat.key] }}
                >
                  {cat.label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.data.map((skill) => (
                  <SkillPill key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="space-y-4"
        >
          <p className="font-mono text-xs text-text-muted tracking-widest text-center uppercase mb-6">
            Technologies I work with
          </p>
          <MarqueeRow items={techMarquee} />
          <MarqueeRow items={[...techMarquee].reverse()} reverse />
        </motion.div>
      </div>
    </section>
  );
}
