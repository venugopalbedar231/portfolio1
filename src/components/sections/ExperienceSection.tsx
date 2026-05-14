"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";

function ExperienceCard({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 300 }}
          className="relative z-10 mt-1"
        >
          <div
            className="timeline-dot w-4 h-4 rounded-full border-2 border-background flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${experience.companyColor}, rgba(6,182,212,0.8))`,
              boxShadow: `0 0 15px ${experience.companyColor}60`,
            }}
          />
        </motion.div>

        {/* Line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-px timeline-line origin-top mt-2"
            style={{ minHeight: "60px" }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-12">
        <motion.div
          whileHover={{ y: -4, borderColor: `${experience.companyColor}40` }}
          className="glass border border-border rounded-2xl p-6 transition-all duration-300 gradient-border shine group"
          style={{ "--hover-color": experience.companyColor } as React.CSSProperties}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              {/* Company logo */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg flex-shrink-0 border border-border"
                style={{
                  background: `${experience.companyColor}15`,
                  color: experience.companyColor,
                }}
              >
                {experience.companyLogo}
              </div>

              <div>
                <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
                  {experience.role}
                </h3>
                <p
                  className="font-display font-semibold text-sm"
                  style={{ color: experience.companyColor }}
                >
                  {experience.company}
                </p>
              </div>
            </div>

            <ExternalLink
              size={16}
              className="text-text-muted group-hover:text-neon-cyan transition-colors mt-1 flex-shrink-0"
            />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 mb-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-neon-purple" />
              {experience.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-neon-cyan" />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
            {experience.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full font-mono text-xs border transition-all duration-200"
                style={{
                  background: `${experience.companyColor}10`,
                  borderColor: `${experience.companyColor}30`,
                  color: experience.companyColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-cyan text-sm tracking-[0.25em] uppercase mb-3">
            02. Experience
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
            Where I&apos;ve{" "}
            <span className="gradient-text-purple">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company + exp.role}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
